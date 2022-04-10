import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const RestaurantIconContainer = styled.View`
  border-radius: 10px;
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-left: 10px;
`;
const Cover = styled(Image)`
  width: 100px;
  height: 70px;
`;

const RestaurantIcon = ({ restaurant, navigate }) => {
  return (
    <TouchableNativeFeedback onPress={()=>navigate({
      name: "RestaurantInfo",
      params: {
        restaurant: restaurant,
      },
    })}>
      <RestaurantIconContainer>
        <Cover key={restaurant.name} source={{ uri: restaurant.photos[0] }} />
        <Text style={{ textAlign: "center" }} >{restaurant.name}</Text>
      </RestaurantIconContainer>
    </TouchableNativeFeedback>
  );
};

RestaurantIcon.propTypes = {
  restaurant: propTypes.object.isRequired,
  navigate : propTypes.func.isRequired
};
export default RestaurantIcon;

const styles = StyleSheet.create({});
