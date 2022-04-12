import { StyleSheet, Text, View, ScrollView ,Dimensions} from "react-native";
import React, { useContext } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import RestaurantIcon from "../restaurants/RestaurantIcon";

const FavoritesBarContainer = styled.View`
  width: 100%;
  height: ${Dimensions.get('window').height * .17};
  padding: 0px 10px 10px 10px;
`;

const FavoritesBar = ({ favorites, navigate }) => {
  return (
    <FavoritesBarContainer>
      <Text style={{ textAlign: "center", fontSize: 15 }} >Favorites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((res) => (
          <RestaurantIcon key={res.name} restaurant={res} navigate={navigate} />
        ))}
      </ScrollView>
    </FavoritesBarContainer>
  );
};
FavoritesBar.propTypes = {
  favorites: propTypes.array.isRequired,
  navigate: propTypes.func.isRequired,
};
export default FavoritesBar;

const styles = StyleSheet.create({});
