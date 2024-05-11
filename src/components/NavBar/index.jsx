import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div className={styles.barraNavegacao}>
                <div className={styles.logo}>
                    <h1><Link className={styles.link} to="/">ATIVIDADE SESI</Link></h1>
                </div>

                <nav className={styles.navbarOpcoes}>
                    <ul>
                        <li>
                            <Link className={styles.link} to="/">Início</Link>
                        </li>
                        <li>
                            <Link className={styles.link} to="/amazon">Amazon</Link>
                        </li>
                        <li>
                            <Link className={styles.link} to="/fifa">FIFA</Link>
                        </li>
                        <li>
                            <Link className={styles.link} to="/netflix">Netflix</Link>
                        </li>
                        {/* <>
                            <li className={styles.dropdown}>
                                <span className={styles.dropdownButton}>Atividade 1 - Amazon</span>
                                <ul className={styles.dropdownContent}>
                                    <li><Link style={{ color: "#A7A000" }} to="/cadastro/animais">Ave</Link></li>
                                    <li><Link style={{ color: "#A7A000" }} to="/cadastro/habitat">Habitat</Link></li>
                                    <li><Link style={{ color: "#A7A000" }} to="/cadastro/atracao">Atração</Link></li>
                                </ul>
                            </li>

                            <li className={styles.dropdown}>
                                <span className={styles.dropdownButton}>Atividade 2 - FIFA</span>
                                <ul className={styles.dropdownContent}>
                                    <li><Link style={{ color: "#A7A000" }} to="/cadastro/animais">Ave</Link></li>
                                    <li><Link style={{ color: "#A7A000" }} to="/cadastro/habitat">Habitat</Link></li>
                                    <li><Link style={{ color: "#A7A000" }} to="/cadastro/atracao">Atração</Link></li>
                                </ul>
                            </li>

                            <li className={styles.dropdown}>
                                <span className={styles.dropdownButton}>Atividade 3 - Netflix</span>
                                <ul className={styles.dropdownContent}>
                                    <li><Link style={{ color: "#A7A000" }} to="/cadastro/animais">Ave</Link></li>
                                    <li><Link style={{ color: "#A7A000" }} to="/cadastro/habitat">Habitat</Link></li>
                                    <li><Link style={{ color: "#A7A000" }} to="/cadastro/atracao">Atração</Link></li>
                                </ul>
                            </li>
                        </> */}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default NavBar;