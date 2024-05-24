import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import FIFARequests from '../../fetch/FIFARequests';
import './ListaFIFA.css'

function ListaCards() {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const maxPageNumbersToShow = 5;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cards = await FIFARequests.buscarCards();
                setCards(cards);
            } catch (error) {
                console.error('Erro: ', error);
            }
        };

        fetchData();
    }, []);

    const deletarCard = async (id) => {
        const confirma = window.confirm(`Deseja deletar o card com id ${id}?`);
        if (confirma) {
            if (await FIFARequests.deletarCard(id)) {
                window.alert('Card deletado com sucesso');
                const updatedCards = cards.filter(card => card.playerid !== id);
                setCards(updatedCards);
            } else {
                window.alert('Erro ao deletar card');
            }
        }
    }

    // Calcular o índice dos itens a serem exibidos na página atual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cards.slice(indexOfFirstItem, indexOfLastItem);

    // Calcular o número total de páginas
    const totalPages = Math.ceil(cards.length / itemsPerPage);

    // Gerar os itens da paginação com páginas limitadas
    const getPageNumbers = () => {
        const pageNumbers = [];
        const halfPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);
        
        let startPage = Math.max(1, currentPage - halfPageNumbersToShow);
        let endPage = Math.min(totalPages, currentPage + halfPageNumbersToShow);

        if (startPage === 1) {
            endPage = Math.min(totalPages, maxPageNumbersToShow);
        } else if (endPage === totalPages) {
            startPage = Math.max(1, totalPages - maxPageNumbersToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    }

    const pageNumbers = getPageNumbers();

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Player ID</th>
                        <th>Nome do Jogador</th>
                        <th>Pé Dominante</th>
                        <th>Posição</th>
                        <th>Overall</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.length > 0 ? (
                        currentItems.map(card => (
                            <tr key={card.playerid}>
                                <td>{card.playerid}</td>
                                <td>{card.playername}</td>
                                <td>{card.foot}</td>
                                <td>{card.playerposition}</td>
                                <td>{card.ovr}</td>    
                                <td onClick={() => deletarCard(card.playerid)}>Deletar</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan='6'>Carregando... Verifique se o servidor está funcionando</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Pagination>
                <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
                <Pagination.Prev onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))} disabled={currentPage === 1} />
                {pageNumbers.map(number => (
                    <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
                        {number}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))} disabled={currentPage === totalPages} />
                <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
            </Pagination>
        </>
    );
}

export default ListaCards;
