import styles from './FIFA.module.css';
import NavBar from "../../components/NavBar";
import ListaFIFA from '../../components/ListaIFIFA/ListaFIFA';

function TabelaFifa() {
    return (
        <>
            <NavBar />
            <h1>Tabela FIFA</h1>
            <ListaFIFA/>
        </>
    );
}

export default TabelaFifa;