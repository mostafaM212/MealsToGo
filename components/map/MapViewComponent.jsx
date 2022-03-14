import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import React , { useState , useContext , useEffect} from "react";
import {RestaurantsContext} from "../../services/restaurants/restaurantsContext";
import { LocationContext } from '../../services/location/locationContext'


const MapViewComponent = () => {

  const { restaurants = []} = useContext(RestaurantsContext)
  const  { location  }  = useContext(LocationContext)
  const [latDelta, setLatDelta] = useState(0);
  const {viewport } = location.results[0].geometry
  
  const {lat , lng} = location.results[0].geometry.location
  useEffect(() => {
    
    
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta)
   }, [location , viewport])
  
  return (
    <MapView
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
        style={{flex : 1 , zIndex : 1}}
    >
      {
        restaurants.map((restaurant, index) => null)
      }
    
    </MapView>
  )
};

export default MapViewComponent;

const styles = StyleSheet.create({});
