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

export default function App() {
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
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <TabNavigation />
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
