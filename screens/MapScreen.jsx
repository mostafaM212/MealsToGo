import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components';
import MapViewComponent from '../components/map/MapViewComponent';
import MapSearchBar from '../components/map/MapSearchBar';


const MapContainer = styled.View`
  flex : 1;
  z-index : 1 ;
`;


const MapScreen = (props) => {
  return (
    <MapContainer>
      <MapSearchBar />
      <MapViewComponent />
    </MapContainer>
  )
}

export default MapScreen

const styles = StyleSheet.create({})