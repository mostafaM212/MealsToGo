import styled from 'styled-components/native';
import { colors } from '../../infrastructure/theme/colors';
import { Button , TextInput } from "react-native-paper";
import {Dimensions , Text} from 'react-native'


export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position : absolute;
  width : 100%;
  height : 100%;
  background-color : rgba(255,255,255,.3)

`;

export const AccountContainer = styled.View`
    background-color : rgba(255,255,255,.7);
    padding : ${(props) => props.theme.space[4]};
    margin-top : ${(props) => props.theme.space[2]};   
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary
})`
    padding : ${(props) => props.theme.space[2]}
`;

export const AuthTextInput = styled(TextInput).attrs({
    mode: 'outlined'
})`;
    width : ${Dimensions.get('screen').width * .5};
    
    font-size : 10px;
    color : ${colors.brand.primary};
    padding: 0px
`;

export const AuthTitle = styled(Text)`  font-size : 30px ;
  color : ${colors.brand.primary};
  font-weight : bold ;
`;

export const AnimationContainer = styled.View`
    width : 100% ;
    height : 50% ;
    position :absolute;
    top : ${Dimensions.get('window').height * .01}
`