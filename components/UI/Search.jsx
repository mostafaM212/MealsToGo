import { StyleSheet, Text, View, StatusBar } from "react-native";
import React, { useState, useContext ,useEffect} from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../services/location/locationContext";

const StyledSearchBar = styled(Searchbar)`
  margin-top: ${StatusBar.currentHeight}px;
  width: 100%;
  flex: 1;
  border-width: 0;
  elevation: 0;
`;

const Search = (props) => {
  const { keyword , search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword)
  
  
  return (
    <StyledSearchBar
      placeholder="Search for Location"
      onChangeText={(text) => setSearchQuery(text)}
      value={searchQuery}
      onSubmitEditing={(text) => {
        search(searchQuery);
      }}
    />
  );
};

export default Search;

const styles = StyleSheet.create({});
