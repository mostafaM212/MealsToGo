import React, { useState } from "react";
import { FlatList } from "react-native";
import RestaurantInfoCard from "../components/restaurants/RestaurantInfoCard";
import {
  RestaurantScreenBody,
  RestaurantScreenContainer,
  StyledSearchBar,
} from "./RestaurantsScreenStyles";
const RestaurantsScreen = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <RestaurantScreenContainer>
      <StyledSearchBar
        placeholder="Search"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <RestaurantScreenBody>
        <FlatList
          data={[
            {name : 1},
            {name : 2},
            {name : 3},
            {name : 4}, 
            {name : 5}, 
            {name : 6}, 
            {name : 7}, 
            {name : 8},
            {name : 9},
            {name : 10}, 
            {name : 11}, 
            {name : 12}, 
            {name : 13}, 
            {name : 14}, 
          ]}
          keyExtractor={(e, index) => e.name}
          style={{padding : 16}}
          renderItem={data => (
            <RestaurantInfoCard  />
          )}
        />
        
      </RestaurantScreenBody>
    </RestaurantScreenContainer>
  );
};
export default RestaurantsScreen;
