import { StyleSheet, Text, View } from "react-native";
import React , {useState , useContext} from "react";
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthTitle,
  AuthTextInput,
} from "../../components/UI/BackgroundAccount";
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";


const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
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
          keyboardType="email-address"
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

        <AuthTextInput
          label="Repeated Password"
          onChangeText={(text) => setRepeatedPassword(text)}
          value={repeatedPassword}
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
            icon="email"
            style={styles.button}
            onPress={() => onRegister(email, password , repeatedPassword)}
            disabled={isLoading}
          >
            Register
          </AuthButton>
        )}
      </AccountContainer>
    </AccountBackground>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
