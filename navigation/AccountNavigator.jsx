import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Background from "../assets/home_bg.jpg";
import AccountScreen from "../screens/Account/AccountScreen";
import LoginScreen from "../screens/Account/LoginScreen";
import RegisterScreen from "../screens/Account/RegisterScreen";

const AccountNavigator = (props) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={AccountScreen}  />
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={RegisterScreen} name="Register" />
    </Stack.Navigator>
  );
};

export default AccountNavigator;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
