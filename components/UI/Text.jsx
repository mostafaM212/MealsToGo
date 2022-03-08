import styled from "styled-components/native";
import React from "react";
import { View } from "react-native";
import propTypes from "prop-types";

const defaultThemeStyle = (theme) => `
    font-family : ${theme.fonts.body};
    font-weight : ${theme.fontsWeight.regular};
    color : ${theme.colors.text.primary};
    flex-wrap : wrap ;
    margin-top : 0px;
    margin-bottom : 0px;

`;

const body = (theme) => `
    font-size : ${theme.fontSizes.body}
`;

const hint = (theme) => `
    font-size : ${theme.fontSizes.body}

`;

const error = (theme) => `
    color : ${theme.colors.text.error}

`;

const caption = (theme) => `
    
    font-size : ${theme.fontSizes.caption};
    font-weight : ${theme.fontsWeight.bold};

`;
const label = (theme) => `
    font-family : ${theme.fonts.heading};
    font-size : ${theme.fontSizes.body};
    font-weight : ${theme.fontsWeight.medium};
`
const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

const Text = styled.Text`
    ${({ theme }) => defaultThemeStyle(theme) };
    ${ ({ variant , theme}) => variants[variant](theme) };
`;
Text.defaultProps = {
    variant : 'body'
}
Text.propTypes = {
    variant : propTypes.string.isRequired 
}
export default Text;
