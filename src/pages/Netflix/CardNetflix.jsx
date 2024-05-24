import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Netflix.module.css';

const BASE_URL = 'http://10.90.2.119:3333';
const ITEMS_PER_PAGE = 9;  

function CardNetflix() {
    const [titulos, setTitulos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchTitulos = async () => {
            try {
                const response = await fetch(`${BASE_URL}/titulos`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar títulos da Netflix');
                }
                const data = await response.json();
                setTitulos(data);
            } catch (error) {
                console.error('Erro ao buscar títulos da Netflix:', error);
            }
        };
        fetchTitulos();
    }, []);

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = titulos.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className={styles.container}>
            <NavBar />
            <h1 className="mt-4">Cards de Títulos da Netflix</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {currentItems.map(titulo => (
                    <div key={titulo.show_id} className="col">
                        <Card>
                            <Card.Body>
                                <Card.Title>ID do Título: {titulo.show_id}</Card.Title>
                                <Card.Text>Tipo: {titulo.tipo}</Card.Text>
                                <Card.Text>Título: {titulo.titulo}</Card.Text>
                                <Card.Text>País: {titulo.pais}</Card.Text>
                                <Card.Text>Ano de Lançamento: {titulo.ano_lancamento}</Card.Text>
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
                <Button variant="secondary" onClick={nextPage} disabled={indexOfLastItem >= titulos.length}>Próxima</Button>
            </div>
        </div>
    );
}

export default CardNetflix;
