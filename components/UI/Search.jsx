import { StyleSheet, StatusBar } from "react-native";
import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../services/location/locationContext";
import { RestaurantsContext } from "../../services/restaurants/restaurantsContext";
import propTypes from "prop-types";

const StyledSearchBar = styled(Searchbar)`
  margin-top: ${StatusBar.currentHeight}px;
  width: 100%;
  flex: 1;
  border-width: 0;
  elevation: 0;
`;

const Search = (props) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);
  const [IsFavorite, setIsFavorite] = useState(false);
  const { restaurants } = useContext(RestaurantsContext);

  const {
    favorites,
    addToFavorites,
    addAll,
    removeFromFavorites,
    clearFavorites,
  } = props.favoritesContext

  const onSearchFavoritePressHandler = () => {
    console.log(favorites.length, restaurants.length);
    if (favorites.length === restaurants.length) {
      clearFavorites();
    } else {
      clearFavorites();

      addAll(restaurants)
    }
    setIsFavorite(!IsFavorite);
  };
  return (
    <StyledSearchBar
      placeholder="Search for Location"
      onChangeText={(text) => setSearchQuery(text)}
      value={searchQuery}
      icon="heart"
      iconColor={IsFavorite ? "red" : "gray"}
      onIconPress={onSearchFavoritePressHandler}
      onSubmitEditing={(text) => {
        search(searchQuery);
      }}
    />
  );
};
Search.propTypes = {
  favoritesContext : propTypes.object.isRequired
}

export default Search;

const styles = StyleSheet.create({});
