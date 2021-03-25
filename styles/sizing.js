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
  paddingVertical: 20,
};

export const Card = {
  minWidth: 280,
  margin: 20,
};

export const padding = {
  paddingBottom: 10,
};
