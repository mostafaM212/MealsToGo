import React, { useState, createContext } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Alert } from "react-native";
export const AuthenticationContext = createContext([]);

export const AuthenticationContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  const onLogin = async (username, password) => {
    setIsLoading(true);
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, username, password)
      .then((userData) => {
        // Signed in
        setIsAuthenticated(true);
        setUser(userData);
        setIsLoading(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);

        setError({
          errorCode,
          errorMessage,
        });
        Alert.alert("Invalid Data", errorCode, [
          {
            text: "Ok",
            onPress: () => null,
          },
        ]);
      });
  };
  const onRegister = async (email, password = "", repeatedPassword = "") => {
    const auth = getAuth();
    setIsLoading(true);
    if (password.length >= 5 && password === repeatedPassword) {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password.toLocaleLowerCase().trim()
      )
        .then((user) => {
          onLogin(email, password.toLocaleLowerCase().trim());
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsLoading(false);
          console.log(error);
          setError({
            errorCode,
            errorMessage,
          });
          Alert.alert("Invalid Data", errorCode, [
            {
              text: "Ok",
              onPress: () => null,
            },
          ]);
        });
    } else {
      setError({
        errorCode:
          "that password was invalid make sure that you write 5 or more characters!",
      });
      Alert.alert("Invalid Password", errorCode, [
        {
          text: "Ok",
          onPress: () => null,
        },
      ]);
    }
  };
  const onLogout = async () => {
    const auth = getAuth();
    await signOut(auth)
      .then((res) => {
        setIsAuthenticated(false);
      })
      .catch((e) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
        console.log(error);
        setError({
          errorCode,
          errorMessage,
        });
        Alert.alert("Invalid Data", errorCode, [
          {
            text: "Ok",
            onPress: () => null,
          },
        ]);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        user: user,
        error: error,
        isLoading: isLoading,
        onLogin: onLogin,
        onRegister: onRegister,
        onLogout: onLogout,
      }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};
