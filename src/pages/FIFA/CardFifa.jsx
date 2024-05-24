import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './FIFA.module.css';

const BASE_URL = 'http://10.90.2.119:3333';
const ITEMS_PER_PAGE = 9;  

function CardFifa() {
    const [players, setPlayers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch(`${BASE_URL}/playercards`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar jogadores do FIFA');
                }
                const data = await response.json();
                setPlayers(data);
            } catch (error) {
                console.error('Erro ao buscar jogadores do FIFA:', error);
            }
        };
        fetchPlayers();
    }, []);

    
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = players.slice(indexOfFirstItem, indexOfLastItem);

    
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className={styles.container}>
            <NavBar />
            <h1 className="mt-4">Cards de Jogadores do FIFA</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {currentItems.map(player => (
                    <div key={player.playerid} className="col">
                        <Card>
                            <Card.Body>
                                <Card.Title>ID do Jogador: {player.playerid}</Card.Title>
                                <Card.Text>Nome do Jogador: {player.playername}</Card.Text>
                                <Card.Text>Pé Dominante: {player.foot}</Card.Text>
                                <Card.Text>Posição: {player.playerposition}</Card.Text>
                                <Card.Text>OVR: {player.ovr}</Card.Text>
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
                <Button variant="secondary" onClick={nextPage} disabled={indexOfLastItem >= players.length}>Próxima</Button>
            </div>
        </div>
    );
}

export default CardFifa;
