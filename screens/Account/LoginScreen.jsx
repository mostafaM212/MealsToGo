import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountContainer,
  AuthTextInput,
    AuthButton,
  AuthTitle
} from "../../components/UI/BackgroundAccount";
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext";
import { ActivityIndicator, Colors } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  console.log(error);

  return (
      <AccountBackground>
          <AuthTitle>Meals To Go</AuthTitle>
      <AccountContainer>
        <AuthTextInput
          label="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
                  textContentType="emailAddress"
                  keyboardType='email-address'
        />
        <View style={{ marginVertical: 10 }}></View>

        <AuthTextInput
          label="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          secure  
        />
        <View style={{ marginVertical: 10 }}></View>
        {isLoading ? (
          <ActivityIndicator
            animating={true}
            color={colors.brand.primary}
            size={25}
          />
        ) : (
          <AuthButton
            mode="contained"
            icon="door"
            style={styles.button}
            onPress={() => onLogin(email, password)}
            disabled={isLoading}
          >
            Login
          </AuthButton>
        )}
      </AccountContainer>
    </AccountBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
