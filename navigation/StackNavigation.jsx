import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  , TransitionPresets} from "@react-navigation/native-stack";
import RestaurantInfoScreen from "../screens/RestaurantInfoScreen";
import RestaurantsScreen from '../screens/RestaurantsScreen'


const StackNavigation = (props) => {
  const StackNavigation = createNativeStackNavigator();

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <StackNavigation.Navigator  >
      <StackNavigation.Screen
        name="Home"
              component={RestaurantsScreen}
              options={{
                  headerShown : false,
              }}
      />

      <StackNavigation.Screen
        name="RestaurantInfo"
        component={RestaurantInfoScreen}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          headerShown : false,
        }}
      />
    </StackNavigation.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
