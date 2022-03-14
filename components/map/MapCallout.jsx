import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components';
import propTypes from 'prop-types';

const CalloutContainer = styled.View`
    width: 40px;
    height : 40px;
    background-color : red ;
`;

const MapCallout = (props) => {
  return (
    <CalloutContainer>
      <Text>MapCallout</Text>
    </CalloutContainer>
  )
}

MapCallout.propTypes = {
    restaurant : propTypes.object.isRequired 
}
export default MapCallout;

const styles = StyleSheet.create({})