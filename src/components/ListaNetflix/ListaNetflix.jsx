import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import NetflixRequests from '../../fetch/NetflixRequests';
import Pagination from 'react-bootstrap/Pagination';


function ListaNetflix() {
    const [filmes, setFilmes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const maxPageNumbersToShow = 5;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const filmes = await NetflixRequests.buscarTitulos();
                setFilmes(filmes);
            } catch (error) {
                console.error('Erro: ', error);
            }
        };

        fetchData();
    }, []);

    const deletarFilme = async (id) => {
        const confirma = window.confirm(`Deseja deletar o filme com id ${id}?`);
        if(confirma){
            if(await NetflixRequests.deletarFilme(id)) {
                window.alert('Filme deletado com sucesso');
                const updatedFilmes = filmes.filter(filme => filme.show_id !== id);
                setFilmes(updatedFilmes);
            } else {
                window.alert('Erro ao deletar filme');
            }
        }
    }

    // Calcular o índice dos itens a serem exibidos na página atual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filmes.slice(indexOfFirstItem, indexOfLastItem);

    // Calcular o número total de páginas
    const totalPages = Math.ceil(filmes.length / itemsPerPage);

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
                        <th>ID do título</th>
                        <th>Tipo</th>
                        <th>Título</th>
                        <th>País</th>
                        <th>Ano de Lançamento</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.length > 0 ? (
                        currentItems.map(filme => (
                            <tr key={filme.show_id}>
                                <td>{filme.show_id}</td>
                                <td>{filme.tipo}</td>
                                <td>{filme.titulo}</td>
                                <td>{filme.pais}</td>
                                <td>{filme.ano_lancamento}</td>
                                <td onClick={() => deletarFilme(filme.show_id)}>Deletar</td>
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

export default ListaNetflix;
