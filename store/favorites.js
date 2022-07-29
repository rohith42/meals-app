import { createContext, useState } from "react";

export const FavoritesContext = createContext({ 
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
    const [favoriteMeals, setFavoriteMeals] = useState([]);

    function addFavorite(id) {
        setFavoriteMeals( prev => [...prev, id] );
    }

    function removeFavorite(id) {
        setFavoriteMeals( prev => prev.filter(meal => meal !== id) );
    }

    const value = {
        ids: favoriteMeals,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };
    
    
    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}