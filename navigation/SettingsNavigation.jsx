import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CameraScreen from '../screens/CameraScreen'

const SettingsNavigation = (props) => {
  const SettingsNavigation = createNativeStackNavigator();
  return (
    <SettingsNavigation.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <SettingsNavigation.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
      <SettingsNavigation.Screen name="Favorites" component={FavoritesScreen} />
      <SettingsNavigation.Screen name="Camera" component={CameraScreen} />
    </SettingsNavigation.Navigator>
  );
};

export default SettingsNavigation;

const styles = StyleSheet.create({});
