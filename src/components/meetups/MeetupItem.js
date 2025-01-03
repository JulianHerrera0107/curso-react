import { useContext } from 'react';

import Card from '../user-interface/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    /*Verificar si el elemento esta marcado como favorito tomando como
    argumento el prop.id del componente MeetupList*/
    const checkItemIsFavorite = favoritesCtx.checkItemIsFavorite(props.id);

    //Funcion para controlar cuando el botón sea activado
    function toggleFavoriteStatusHandler() {
        if (checkItemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {checkItemIsFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                    </button>
                </div>
            </Card>
        </li>
    );
}
export default MeetupItem;