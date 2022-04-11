import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";




export const RestaurantScreenContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.bg.primary};
  align-items: center;
`;

export const RestaurantScreenBody = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  flex: 10;
  height: 100%;
  width: 100%;
  
`;


export const ActivityIndicatorContainer = styled.View`
  flex :  1;
  align-items: center;
  justify-content: center;
`;
 
