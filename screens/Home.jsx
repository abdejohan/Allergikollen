import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';



const Home = () => {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.text}> This is my Home screen </Text>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "darkblue",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontSize: 50,
    backgroundColor: "red",
  }
});


export default Home;

