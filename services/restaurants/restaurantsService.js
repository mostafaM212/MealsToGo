import { mocks , mockImages } from './mock/index';
import camelize from 'camelize'

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
    

    return new Promise((resolve, reject) => {
        

        const mock = restaurantsTransform(mocks[location]);
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