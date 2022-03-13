import { StyleSheet, Text, View , StatusBar} from "react-native";
import React, { useState } from "react";
import RestaurantInfoCard from "../components/restaurants/RestaurantInfoCard";
import { List } from "react-native-paper";
import styled from "styled-components";

const RestaurantInfoContainer = styled.View`
  background-color: white;
  flex: 1;
  margin-top : ${StatusBar.currentHeight}px
`;
const ListContainer = styled.ScrollView`
  background-color: white;
  flex: 1;
`;
const RestaurantInfoScreen = (props) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [launchExpanded, setLaunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const restaurant = props.route.params.restaurant;

  return (
    <RestaurantInfoContainer>
      <RestaurantInfoCard restaurant={restaurant} />
      <ListContainer style={{ backgroundColor: "white" }}>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          expanded={breakfastExpanded}
          style={{ backgroundColor: "white" }}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={launchExpanded}
          onPress={() => setLaunchExpanded(!launchExpanded)}
          style={{ backgroundColor: "white" }}

          
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          expanded={dinnerExpanded}
          style={{ backgroundColor: "white" }}

        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          style={{ backgroundColor: "white" }}

        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ListContainer>
    </RestaurantInfoContainer>
  );
};

export default RestaurantInfoScreen;

const styles = StyleSheet.create({});
