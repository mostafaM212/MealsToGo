import { locations } from "./locationMock";
import camelize from 'camelize';


export const locationRequest = (searchQuery='')=>{

    return new Promise((resolve, reject) => {
        
        const locationMock = locations[searchQuery.toLowerCase()]

        if (!locationMock) {
            console.log('error context')
            reject('NOT Found')
        }
        return resolve(locationMock)
    })
    
} 

export const locationTransform = (result) => {
    
    const { geometry } = camelize(result.results)[0];
    
    const { lat, lng } = geometry.location;

    return { lat, lng ,viewport : geometry.viewport};
}