import { Dimensions } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");

export const screenSizing = {
  width: screenWidth,
  height: screenHeight,
};

export const Screen = {
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "center",
};

export const Card = {
  flex: 1,
  margin: 20,
};
