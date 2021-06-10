import React, {createContext, useContext, useMemo} from 'react'
import {GlobalContext} from './GlobalState'

export const favoriteClickCountContext = createContext();

export const FavoriteClickCountProvider = ({children}) =>{
    const {incrementFavoriteClickCount} = useContext(GlobalContext);
    // const provider = {
    //     incrementFavoriteClickCount
    // }

    const provider = useMemo(() => {
        return {incrementFavoriteClickCount}
    }, []);

    return (
        <favoriteClickCountContext.Provider value={provider}>
            {children}
        </favoriteClickCountContext.Provider>
    )
}