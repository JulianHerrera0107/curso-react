import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesContextProvider(props){
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
    function itemIsFavoriteHandle(meetupId) {
        //Si un elemento coincide con nuestros favoritos devuelve true o false
        //Nos permite averiguar si los ID del usuario se encuentran marcados como favortios
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}