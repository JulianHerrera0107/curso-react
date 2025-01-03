import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    //Funciones para comprobar si los parametros son corrwctos
    //Nos permitira un mejor autocompletar en el IDE
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (meetupId) => { },
    checkItemIsFavorite: (meetupId) => { }

});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    //Botón para añadir
    function addFavoriteHandler(favoriteMeetup) {
        //Permite obtener siempre la última actualización del estado
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
            //Concat nos permite unir dos o más arrays en uno nuevo
            //Antiguaversion + NuevaVersion = favoriteMeetup
        });
    }

    //Botón para eliminar
    function removeFavoriteHandler(meetupId) {
        //Dependemos nuevamente de otro estado
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
            //.filter = Si en la BD el ID coincide con meetupId devolvemos falso
            // filter devuelve un array nuevo con los valores verdaderos
            // De esta manera los ID que no coinciden serán filtrados
        });
    }

    //Función para determinar si un elemento es favorito o no
    function checkItemIsFavoriteHandler(meetupId) {
        //Si un elemento coincide con nuestros favoritos devuelve true o false
        //Nos permite averiguar si los ID del usuario se encuentran marcados como favortios
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        //Almacenamos las funciones en un valor para ser utiiizados por los componentes
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        checkItemIsFavorite: checkItemIsFavoriteHandler
    };

    return (
        //Acceso al contexto para todos los componentes involucrados por Props
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}
export default FavoritesContext;