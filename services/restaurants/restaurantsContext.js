import React, { useEffect, useContext, useState, createContext } from "react";
import { LocationContext } from "../location/locationContext";
import { restaurantsRequest, restaurantsTransform } from "./restaurantsService";

export const RestaurantsContext = createContext();

const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { keyword } = useContext(LocationContext);

  const retrieveRestaurants = (keyword) => {
    setIsLoading(false)
    setTimeout(() => {
      restaurantsRequest(keyword)
        .then((restaurants) => {
          setRestaurants(restaurants);
          setIsLoading(true);
        })
        .catch((e) => {
          setError(e.response.data);
          console.log("not found");
          setIsLoading(true);
        });
    }, 2000);
  };
  useEffect(() => {
    retrieveRestaurants(keyword);
    console.log(keyword);
  }, [retrieveRestaurants, keyword]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: restaurants,
        isLoading: isLoading,
        Error: error,
      }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};

export default React.memo(RestaurantsContextProvider);
