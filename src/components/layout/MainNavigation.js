import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation() {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Encuentros React</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Todos los Encuentros</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Nuevo Encuentro</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Mis Favoritos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;