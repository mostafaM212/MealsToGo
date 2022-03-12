import React, { useState, useContext } from "react";
import { FlatList } from "react-native";
import RestaurantInfoCard from "../components/restaurants/RestaurantInfoCard";
import { RestaurantsContext } from "../services/restaurants/restaurantsContext";
import {
  RestaurantScreenBody,
  RestaurantScreenContainer,
  ActivityIndicatorContainer,
} from "./RestaurantsScreenStyles";
import { ActivityIndicator, Colors } from "react-native-paper";
import Search from "../components/UI/Search";



const RestaurantsScreen = (props) => {
 
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  
  
  return (
    <RestaurantScreenContainer>
      <Search/>
      <RestaurantScreenBody>
        {!isLoading ? (
          <ActivityIndicatorContainer>
            <ActivityIndicator
              size={50}
              color={Colors.blue300}
              animating={true}
            />
          </ActivityIndicatorContainer>
        ) : (
          <FlatList
            data={restaurants}
            keyExtractor={(e, index) => index}
            style={{ padding: 4 }}
            renderItem={(data) => <RestaurantInfoCard restaurant={data.item} navigate = {props.navigation.navigate} />}
          />
        )}
      </RestaurantScreenBody>
    </RestaurantScreenContainer>
  );
};
export default React.memo(RestaurantsScreen);
