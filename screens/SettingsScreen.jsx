import { StyleSheet, Text, View, StatusBar } from "react-native";
import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import { AuthenticationContext } from "../services/authentication/AuthenticationContext";
import styled from "styled-components/native";
import { colors } from "../infrastructure/theme/colors";

const SettingContainer = styled.View`
  margin-top: ${StatusBar.currentHeight}px;
  width: 100%;
`;
const EmailText = styled(Text)`
  color : ${colors.brand.primary};
  font-weight : bold;
  margin-vertical : 5px
`
const SettingsScreen = (props) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  console.log(user['email'])
  return (
    <SettingContainer>
      <View style={{alignItems :'center'}}>
        <Avatar.Icon
          size={180}
          icon="human"
          backgroundColor="#2182BD"
          style={{ textAlgin: "center" }}
        />
        <EmailText>{ user.user.email }</EmailText>
      </View>
      <List.Section>
        <List.Item
          title="Favorites"
          style={{ padding: 16 }}
          left={() => <List.Icon {...props} icon="heart" color="red" />}
          onPress={() => props.navigation.navigate('Favorites')}
        />
        <List.Item
          title="Logout"
          style={{ padding: 16, color: "red" }}
          left={() => <List.Icon {...props} icon="door" color="red" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SettingContainer>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
