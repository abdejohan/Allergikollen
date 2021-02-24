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
  paddingTop: 20,
};
