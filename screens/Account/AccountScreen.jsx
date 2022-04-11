import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
    AuthButton,
    AuthTitle
} from "../../components/UI/BackgroundAccount.js";
import { colors } from "../../infrastructure/theme/colors.js";

const AccountScreen = (props) => {
  return (
    <AccountBackground>
          <AccountCover />
          <AuthTitle>Meals To Go</AuthTitle>
          <AccountContainer>
              
        <AuthButton
          color={colors.brand.primary}
          icon="lock-open-outline"
          mode="contained"
          onPress={() => props.navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <View style={{ marginVertical: 10 }}></View>
        <AuthButton
          color={colors.brand.primary}
          icon="email"
          mode="contained"
          onPress={() => props.navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
export default AccountScreen;
const styles = StyleSheet.create({});
