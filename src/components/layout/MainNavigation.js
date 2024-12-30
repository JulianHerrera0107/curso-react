import { Link } from 'react-router-dom'

function MainNavigation() {
    return(
        <header>
            <div>Reuniones de React</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Todas las Reuniones</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Agregar Nueva Reunión</Link>
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