import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import TabNavigation from "./TabNavigation";
import { AuthenticationContext } from "../services/authentication/AuthenticationContext";
import { NavigationContainer } from "@react-navigation/native";
import AccountNavigator from "./AccountNavigator";

const MainNavigator = (props) => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
