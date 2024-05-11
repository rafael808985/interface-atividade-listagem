import styles from './Home.module.css';
import NavBar from "../../components/NavBar";

function Home() {
    return (
        <>
            <NavBar />
            <p className={styles.cabecalho}>
                Esta atividade é destinada a prática da última aula.
            </p>
            <p className={styles.cabecalho}>
                Vocês devem criar uma tabela para listar os dados de uma API.
            </p>
            <p className={styles.cabecalho}>
                Ao todo serão 3 tabelas, a primeira são os livros best-sellers da Amazon <br />
                A segunda são Cards de jogadores do jogo FIFA 2022 <br />
                A última são filmes e séries do catálogo da Netflix <br />
                Para mais informações sobre a tarefa, consulte o arquivo README.md na raiz do projeto.
            </p>
        </>
    );
}

export default Home;