import { StyleSheet, View, FlatList } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../services/favorites/FavoritesContext";
import RestaurantInfoCard from "../components/restaurants/RestaurantInfoCard";
import { ActivityIndicatorContainer } from "./RestaurantsScreenStyles";
import FadeAnimation from "../animations/FadeAnimation";
import { Text } from 'react-native'

const FavoritesScreen = (props) => {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length == 0) {
    return (
      <ActivityIndicatorContainer>
        <Text>Not Found</Text>
      </ActivityIndicatorContainer>
    );
  }
  return (
    <FadeAnimation>
      <View>
        {
          <FlatList
            data={favorites}
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
        }
      </View>
    </FadeAnimation>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
