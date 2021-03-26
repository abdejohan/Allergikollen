import { Dimensions } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");

export const screenSizing = {
  width: screenWidth,
  height: screenHeight,
};

export const Screen = {
  flex: 1,
  paddingVertical: 20,
  paddingHorizontal: 20,
};

export const ScrollScreen = {
  flex: 1,
  paddingVertical: 20,
  paddingHorizontal: 20,
  width: screenWidth,
  height: screenHeight,
};

export const Card = {
  minWidth: 280,
  margin: 20,
};

export const padding = {
  paddingBottom: 10,
};
