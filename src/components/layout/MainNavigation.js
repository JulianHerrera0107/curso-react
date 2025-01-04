import { Link } from 'react-router-dom'
import { useContext } from 'react';
import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context';


function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
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
                        <Link to='/favorites'>
                            Mis Favoritos
                            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;