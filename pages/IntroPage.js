import React from "react";
import { View } from "react-native";
import { Sizing } from "../styles/index";
import { Layout, Spinner, Text } from "@ui-kitten/components";

const IntroPage = () => {
  return (
    <View style={Sizing.Screen}>
      <Layout>
        <Text>Allergikollen</Text>
        <Spinner />
      </Layout>
    </View>
  );
};

// const styles = StyleSheet.create({
//   introContainer: {
//     flex: 1,
//     backgroundColor: "blue",
//     flexDirection: "column",
//     justifyContent: "space-around",
//     alignItems: "stretch",
//   },
// });

export default IntroPage;
