import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import MainNavigator from "./navigation/MainNavigator";
import { restaurantsRequest } from "./services/restaurants/restaurantsService";
import RestaurantsContextProvider from "./services/restaurants/restaurantsContext";
import { LocationContextProvider } from "./services/location/locationContext";
import { FavoritesContextProvider } from "./services/favorites/FavoritesContext";
import { initializeFireBase } from "./firebase/InitializeFireBase";
import React, {  useState } from "react";
import { AuthenticationContextProvider } from "./services/authentication/AuthenticationContext";


initializeFireBase();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <MainNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
