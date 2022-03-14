import { StyleSheet, Text, View, StatusBar } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../services/location/locationContext";

const StyledSearchBar = styled(Searchbar)`
  top: ${StatusBar.currentHeight + 10}px;
  width: 80%;
  position: absolute;
  border-width: 0;
  z-index: 91;
  left: 10%;
  border-radius: 10px;
  padding: 3px;
`;

const MapSearchBar = (props) => {
  const { keyword, search } = useContext(LocationContext);

  const [searchQuery, setSearchQuery] = useState(keyword);

    
  return (
    <StyledSearchBar
      placeholder="Search for Location"
      onChangeText={(text) => setSearchQuery(text)}
      value={searchQuery}
      icon="map"
      onSubmitEditing={(e) => {
        search(searchQuery)
      }}
    />
  );
};

export default MapSearchBar;

const styles = StyleSheet.create({});
