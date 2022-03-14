import { mocks , mockImages, mapMocksLocations } from './mock/index';
import camelize from 'camelize'


export const restaurantsRequest = (location = "san_francisco") => {
    
    location = location.toLocaleLowerCase();

    if (location === 'san francisco') {
        location = 'san_francisco';
    }
    return new Promise((resolve, reject) => {
        

        const mock = restaurantsTransform(mocks[mapMocksLocations[location]]);
        if (!mock) { 
            reject("Not Found")
        }
        return resolve(mock)
    }).catch(e =>console.log(e))
 
}

export const restaurantsTransform = ({results = []}) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map(p => {
            return mockImages[Math.ceil(Math.random()* (mockImages.length - 1))]
        })
        return {
            ...restaurant,
            isClosedTemporarily: restaurant.business_status == 'CLOSED_TEMPORARILY',
            isOpenNow :  restaurant.opening_hours && restaurant.opening_hours.open_now 
        }
    })
    return camelize(mappedResults);
}