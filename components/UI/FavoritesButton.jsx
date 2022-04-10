import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import React, { useState, useContext , useEffect } from "react";
import Ioicons from "react-native-vector-icons/Ionicons";
import styled from "styled-components";
import propTypes from "prop-types";
import { FavoritesContext } from "../../services/favorites/FavoritesContext";

const FavoriteButtonContainer = styled(View)`
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 9;
`;

const FavoritesButton = ({ restaurant }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { favorites, addToFavorites, removeFromFavorites } =
        useContext(FavoritesContext);
    
    useEffect(() => {
        const isFound = favorites.find(
            (rest) => rest.placeId === restaurant.placeId
        );
        if (isFound) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }, [favorites , restaurant])
  const addToFavoriteHandler = () => {
    const isFound = favorites.find(
      (rest) => rest.placeId === restaurant.placeId
    );
      if (isFound) {
          removeFromFavorites(restaurant)
          setIsFavorite(false)
      } else {
          addToFavorites(restaurant)
          setIsFavorite(true)
      }
  };
  return (
    <TouchableNativeFeedback onPress={addToFavoriteHandler}>
      <FavoriteButtonContainer>
        <Ioicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={25}
          color={isFavorite ? "red" : "white"}
        ></Ioicons>
      </FavoriteButtonContainer>
    </TouchableNativeFeedback>
  );
};
FavoritesButton.propTypes = {
  restaurant: propTypes.object.isRequired,
};

export default FavoritesButton;

const styles = StyleSheet.create({});
