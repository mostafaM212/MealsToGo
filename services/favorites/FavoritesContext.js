import React , {createContext , useState , useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const FavoritesContext = createContext();


export const FavoritesContextProvider = props => {

    const [favorites, setFavorites] = useState([]);
    
   

    const storeFavorites =async (favoritesData) => {
        
        const transformedFav = JSON.stringify(favoritesData);

        try {
            await AsyncStorage.setItem('@favorites', transformedFav)
        } catch (error) {
            console.log('error setting',error)
        }
    }
    const getFavorites =async () => {
        

        try {
            const favorites = await AsyncStorage.getItem('@favorites');
           
            if (favorites !== null) {
                setFavorites(JSON.parse(favorites))
            }
        } catch (error) {
            console.log('error loading',error)
        }
    }
    const add = (restaurant) => {
        setFavorites([...favorites, restaurant])
        
    }

    const remove = (restaurant) => {
        
        const newFavorites = favorites.filter((fav , index)=>fav.placeId!== restaurant.placeId)
        setFavorites(newFavorites)
    }
    const clearFavorites = () => {
        setFavorites([])
    }
    const addAllRestaurantToFavorites = (restaurants) => {
        setFavorites(restaurants)
    }
    useEffect(() => {
        getFavorites()
    }, [])
    useEffect(() => {
        storeFavorites(favorites);
    },[favorites])
    return (
        <FavoritesContext.Provider value={{
            favorites : favorites,
            addToFavorites: add,
            removeFromFavorites: remove,
            clearFavorites: clearFavorites,
            addAll : addAllRestaurantToFavorites
        }}>
            {
                props.children
            }
        </FavoritesContext.Provider>
    )
}