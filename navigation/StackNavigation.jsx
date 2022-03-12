import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantInfoScreen from "../screens/RestaurantInfoScreen";
import RestaurantsScreen from '../screens/RestaurantsScreen'


const StackNavigation = (props) => {
  const StackNavigation = createNativeStackNavigator();
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen
        name="Home"
              component={RestaurantsScreen}
              options={{
                  headerShown : false
              }}
      />

      <StackNavigation.Screen
        name="RestaurantInfo"
        component={RestaurantInfoScreen}
      />
    </StackNavigation.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
