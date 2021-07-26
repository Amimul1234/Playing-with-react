import {createContext} from "react";

const FavouriteContext = createContext({
    favourites: [],
    totalFavourites: 0
});

function FavouritesContextProvider(props) {
    const context = {};

    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>
}