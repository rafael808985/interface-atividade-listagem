import styles from './Netflix.module.css';
import NavBar from "../../components/NavBar";
import ListaNetflix from '../../components/ListaNetflix/ListaNetflix';

function TabelaNetflix() {
    return (
        <>
            <NavBar />
            <h1>Tabela Netflix</h1>
            <ListaNetflix />
        </>
    );
}

export default TabelaNetflix;