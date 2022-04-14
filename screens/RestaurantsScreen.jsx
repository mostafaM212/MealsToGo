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
import { FavoritesContext } from "../services/favorites/FavoritesContext";
import FavoritesBar from "../components/favorites/FavoritesBar";
import FadeAnimation from "../animations/FadeAnimation";

const RestaurantsScreen = (props) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  const context = useContext(FavoritesContext);
  
  return (
    <RestaurantScreenContainer>
      <Search favoritesContext={context} />
      {context.favorites.length > 0 && (
        <FavoritesBar
          favorites={context.favorites}
          navigate={props.navigation.navigate}
        />
      )}
      <RestaurantScreenBody>
        {isLoading ? (
          <ActivityIndicatorContainer>
            <ActivityIndicator
              size={50}
              color={Colors.blue300}
              animating={true}
            />
          </ActivityIndicatorContainer>
        ) : (
          <FadeAnimation>
            <FlatList
              data={restaurants}
              keyExtractor={(e, index) => index}
              style={{ padding: 4 }}
              renderItem={(data) => (
                <RestaurantInfoCard
                  restaurant={data.item}
                  navigate={props.navigation.navigate}
                  routeName={props.route.name}
                />
              )}
            />
          </FadeAnimation>
        )}
      </RestaurantScreenBody>
    </RestaurantScreenContainer>
  );
};
export default React.memo(RestaurantsScreen);
