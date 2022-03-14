import styled from 'styled-components/native';
import { Card, Paragraph, Button, Avatar } from "react-native-paper";




export const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  z-index : 2;
`;
export const StyledCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
  z-index : 1;
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const RatingRow = styled.View`
  flex-direction: row;
  padding-vertical: ${(props) => props.theme.space[2]};
  align-items : center
`;

export const SVGContainer = styled.View`
  justify-content: space-between;
  flex-direction : row
`;
