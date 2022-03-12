import React, { useEffect, useContext, useState, createContext } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurantsService";

export const RestaurantsContext = createContext();

const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


    
  
    
  const retrieveRestaurants = () => {
    

    setTimeout(() => {
      restaurantsRequest()
        .then((restaurants) => {
          setRestaurants(restaurants);
          setIsLoading(true);

        })
        .catch((e) => {
          setError(e.response.data);
          console.log("not found");
        });
    }, 2000);
  };
  useEffect(() => {
    
    retrieveRestaurants();
  }, [retrieveRestaurants]);

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
