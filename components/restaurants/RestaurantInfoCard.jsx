import React from "react";
import propTypes from "prop-types";
import { SvgXml } from "react-native-svg";
import star from "../../assets/svg/star";
import open from "../../assets/svg/open";
import Text from "../UI/Text";
import { TouchableNativeFeedback } from "react-native";

import {
  Address,
  Info,
  RatingRow,
  SVGContainer,
  StyledCard,
  StyledCover,
} from "./RestaurantInfoCardStyle";

const RestaurantInfoCard = (props) => {
  let {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Some Random Street",
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily,
  } = props.restaurant;
  
  let rattingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <TouchableNativeFeedback onPress={() => {
      if (props.routeName=== 'Home') {
        props.navigate({
          name: 'RestaurantInfo', params: {
          restaurant : props.restaurant
        }})
      }
    }} >
      <StyledCard>
        <StyledCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant={"label"}>{name}</Text>
          <SVGContainer>
            <RatingRow>
              {rattingArray.map((e, index) => (
                <SvgXml xml={star} width={20} height={20} key={index} />
              ))}
            </RatingRow>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            {isClosedTemporarily && (
              <Text variant="caption">CLOSED TEMPORARILY</Text>
            )}
          </SVGContainer>
          <Address>{address}</Address>
        </Info>
      </StyledCard>
    </TouchableNativeFeedback>
  );
};
RestaurantInfoCard.propTypes = {
  restaurant: propTypes.object,
};
export default RestaurantInfoCard;
