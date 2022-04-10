import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import TabNavigation from "./navigation/TabNavigation";
import { restaurantsRequest } from "./services/restaurants/restaurantsService";
import RestaurantsContextProvider from "./services/restaurants/restaurantsContext";
import { LocationContextProvider } from "./services/location/locationContext";
import { FavoritesContextProvider } from "./services/favorites/FavoritesContext";
import { initializeFireBase } from "./firebase/InitializeFireBase";
import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

initializeFireBase();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, 'admin@admin.com', 'testApp')
      .then((user) => {
        // Signed in
        
        setIsAuthenticated(true)
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode , errorMessage)
      });
  }, []);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  const restaurants = restaurantsRequest().then((data) => data);

  
  return (
    <ThemeProvider theme={theme}>
      <FavoritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <TabNavigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
