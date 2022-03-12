import React, { useEffect, useState, createContext } from "react";
import { locationRequest, locationTransform } from "./locationService";

export const LocationContext = createContext();

export const LocationContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("san francisco");

  const onSearch = (searchQuery) => {
    setIsLoading(true);
    if (!searchQuery.length) {
      //don't do any thing
      return;
    }
    locationRequest(searchQuery.toLowerCase())
      .then((result) => {
        const resultData = locationTransform(result);
        setIsLoading(true);
        setKeyword(searchQuery);
        console.log(resultData);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
        console.log(e);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, [keyword]);
  return (
    <LocationContext.Provider
      value={{
        isLoading: false,
        error,
        location,
        search: onSearch,
        keyword: capitalizeWord(keyword),
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

const capitalizeWord = (word = "") => {
  const arr = word.split(" ");

  //loop through each element of the array and capitalize the first letter.

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  //Join all the elements of the array back into a string
  //using a blankspace as a separator
  const str2 = arr.join(" ");

  return str2;
};
