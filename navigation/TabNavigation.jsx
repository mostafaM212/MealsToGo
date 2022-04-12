import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import RestaurantScreen from "../screens/RestaurantsScreen";
import MapScreen from "../screens/MapScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import StackNavigation from "./StackNavigation";
import SettingsNavigation from "./SettingsNavigation";

const TabNavigation = () => {
  const BottomNavigator = createMaterialBottomTabNavigator();
  return (
    <BottomNavigator.Navigator
      activeColor="tomato"
      inactiveColor="gray"
      barStyle={{ backgroundColor: "white" }}
      labeled={false}
    >
      <BottomNavigator.Screen
        name="Restaurants"
        component={StackNavigation}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="md-restaurant"
              size={focused ? 25 : 20}
              color={color}
            />
          ),
          
        }}
      />
      <BottomNavigator.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="map" size={focused ? 25 : 20} color={color} />
          ),
        }}
      />
      <BottomNavigator.Screen
        name="Settings"
        component={SettingsNavigation}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="md-settings"
              size={focused ? 25 : 20}
              color={color}
            />
          ),
        }}
      />
    </BottomNavigator.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
