import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { MaterialIcons } from "@expo/vector-icons";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as theme } from "./custom-theme.json"; // <-- Import app theme

// these handle screens for both bottom and top navigation
import IntroPage from "./pages/IntroPage";
import {
  HomeScreenNavigator,
  ScannerScreenNavigator,
  SupportScreenNavigator,
  SettingsScreenNavigator,
} from "./CustomNavigation";

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        {!fontsLoaded ? (
          <IntroPage />
        ) : (
          <NavigationContainer>
            <Tab.Navigator
              shifting={true}
              initialRouteName="Scan"
              activeColor="white"
              inactiveColor="grey"
              barStyle={{ backgroundColor: "rgba(50, 159, 91, 0.24)" }}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreenNavigator}
                options={{
                  tabBarLabel: "Mina Sidor",
                  tabBarIcon: () => (
                    <AntDesign
                      name="home"
                      style={{ color: "white" }}
                      size={24}
                      color="black"
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Scan"
                component={ScannerScreenNavigator}
                options={{
                  tabBarBadge: true,
                  tabBarLabel: "Scanna",
                  tabBarIcon: () => (
                    <Ionicons name="barcode-outline" size={24} color="white" />
                  ),
                }}
              />

              <Tab.Screen
                name="Settings"
                component={SettingsScreenNavigator}
                options={{
                  tabBarLabel: "Inställningar",
                  tabBarIcon: () => (
                    <MaterialIcons name="settings" size={24} color="white" />
                  ),
                }}
              />
              <Tab.Screen
                name="Support"
                component={SupportScreenNavigator}
                options={{
                  tabBarLabel: "Support",
                  tabBarIcon: () => (
                    <MaterialIcons
                      name="support-agent"
                      size={24}
                      color="white"
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        )}
      </ApplicationProvider>
    </>
  );
};

export default App;
