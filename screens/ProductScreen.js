import React from "react";
import { View, Text } from "react-native";

const ProductScreen = ({ route }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> ProductScreen </Text>
      <Text> {route.params.data} </Text>
    </View>
  );
};

export default ProductScreen;
