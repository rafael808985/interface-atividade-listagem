import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import AmazonRequests from '../../fetch/AmazonRequests';

function ListaAmazon() {
    const [produtos, setProdutos] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const maxPageNumbersToShow = 5; // Define o número máximo de botões de página a serem mostrados

    useEffect(() => {
        const fetchData = async () => {
            try {
                const livros = await AmazonRequests.buscarProdutos();
                setProdutos(livros);
            } catch (error) {
                console.error('Erro: ', error);
            }
        };

        fetchData();
    }, []);

    const deletarProduto = async (id) => {
        const confirma = window.confirm(`Deseja deletar o produto com id ${id}?`);
        if (confirma) {
            if (await AmazonRequests.deletarProduto(id)) {
                window.alert('Produto deletado com sucesso');
                const updatedProdutos = produtos.filter(produto => produto.id_livro !== id);
                setProdutos(updatedProdutos);
            } else {
                window.alert('Erro ao deletar Produto');
            }
        }
    }

    // Calcular o índice dos itens a serem exibidos na página atual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = produtos && produtos.slice(indexOfFirstItem, indexOfLastItem);

    // Calcular o número total de páginas
    const totalPages = Math.ceil((produtos && produtos.length) / itemsPerPage);

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
                        <th>ID do Livro</th>
                        <th>Nome do Livro</th>
                        <th>Edição</th>
                        <th>Data da Venda</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    {currentItems ? (
                        currentItems.map(produto => (
                            <tr key={produto.id_livro}>
                                <td>{produto.id_livro}</td>
                                <td>{produto.nome_produto}</td>
                                <td>{produto.edicao}</td>
                                <td>{new Date(produto.data_venda).toLocaleDateString('pt-BR')}</td>
                                <td onClick={() => deletarProduto(produto.id_livro)}>Deletar</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan='5'>Carregando... Verifique se o servidor está funcionando</td>
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

export default ListaAmazon;
