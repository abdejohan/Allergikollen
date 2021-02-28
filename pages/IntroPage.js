import React from "react";
import { View, Text } from "react-native";
import { Sizing } from "../styles/index";
import { Spinner } from "@ui-kitten/components";

const IntroPage = () => {
  return (
    <View style={Sizing.Screen}>
      <View>
        <View>
          <Text> Allergikollen </Text>
        </View>
        <View>
          <Spinner />
        </View>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   introContainer: {
//     flex: 1,
//     backgroundColor: "rgba(219,211,173, 0.3)",
//     flexDirection: "column",
//     justifyContent: "space-around",
//     alignItems: "stretch",
//   },
//   header: {
//     flex: 1,
//   },
//   body: {
//     flex: 1,
//   },
// });

export default IntroPage;
