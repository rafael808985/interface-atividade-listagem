import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BASE_URL = 'http://10.90.2.119:3333';
const ITEMS_PER_PAGE = 9; 

function CardAmazon() {
    const [vendas, setVendas] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchVendas = async () => {
            try {
                const response = await fetch(`${BASE_URL}/vendas`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar vendas');
                }
                const data = await response.json();
                setVendas(data);
            } catch (error) {
                console.error('Erro ao buscar vendas:', error);
            }
        };
        fetchVendas();
    }, []);

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = vendas.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <NavBar />
            <h1 className="mt-4">Cards de Vendas (Amazon)</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {currentItems.map(venda => (
                    <div key={venda.id_livro} className="col">
                        <Card>
                            <Card.Body>
                                <Card.Title>ID do Livro: {venda.id_livro}</Card.Title>
                                <Card.Text>Data da Venda: {new Date(venda.data_venda).toLocaleDateString('pt-BR')}</Card.Text>
                                <Card.Text>Nome do Livro: {venda.nome_produto}</Card.Text>
                                <Card.Text>Edição: {venda.edicao}</Card.Text>
                                {/* Adicione outros detalhes do card conforme necessário */}
                                {/* Exemplo de botão dentro do card */}
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center mt-4">
                <Button variant="secondary" onClick={prevPage} disabled={currentPage === 1}>Anterior</Button>
                <span className="mx-3">Página {currentPage}</span>
                <Button variant="secondary" onClick={nextPage} disabled={indexOfLastItem >= vendas.length}>Próxima</Button>
            </div>
        </div>
    );
}

export default CardAmazon;
