import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { MaterialIcons } from "@expo/vector-icons";

// Screens
import Home from "./screens/Home";
import IntroPage from "./screens/IntroPage";
import Scanner from "./screens/Scanner";
import Report from "./screens/Report";
import Livsmedelsverket from "./screens/Livsmedelsverket";

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const [loaded, setLoaded] = useState(null);
  setTimeout(function () {
    setLoaded("loaded");
  }, 10);
  return (
    <>
      {!loaded ? (
        <IntroPage />
      ) : (
        <>
          <NavigationContainer>
            <Tab.Navigator
              shifting={true}
              initialRouteName="Home"
              activeColor="black"
              inactiveColor="grey"
              barStyle={{ backgroundColor: "white" }}
            >
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarLabel: "Hem",
                  tabBarIcon: () => (
                    <AntDesign name="home" size={24} color="black" />
                  ),
                }}
              />
              <Tab.Screen
                name="Scan"
                component={Scanner}
                options={{
                  tabBarBadge: true,
                  tabBarLabel: "Scanner",
                  tabBarIcon: () => (
                    <Ionicons name="barcode-outline" size={24} color="black" />
                  ),
                }}
              />
              <Tab.Screen
                name="Report"
                component={Report}
                options={{
                  tabBarLabel: "Support",
                  tabBarIcon: () => (
                    <MaterialIcons
                      name="support-agent"
                      size={24}
                      color="black"
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </>
      )}
    </>
  );
};

export default App;
