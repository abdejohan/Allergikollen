import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { MaterialIcons } from "@expo/vector-icons";
import { API_URL, API_TOKEN } from "@env";
console.log(API_TOKEN);

// these handle screens for both bottom and top navigation
import Settings from "./screens/Settings";
import IntroPage from "./screens/IntroPage";
import {
  HomeScreenNavigator,
  ScannerScreenNavigator,
  ReportScreenNavigator,
} from "./CustomNavigation";

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const [loaded, setLoaded] = useState(null);
  setTimeout(function () {
    setLoaded("loaded");
  }, 10);

  const [selectedAllergens, setSelectedAllergens] = useState([]);
  const deleteAllergen = (allergen) => {
    const newArray = selectedAllergens.filter((e) => e !== allergen);
    console.log(newArray);
    setSelectedAllergens(newArray);
  };

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
                component={HomeScreenNavigator}
                options={{
                  tabBarLabel: "Hem",
                  tabBarIcon: () => (
                    <AntDesign name="home" size={24} color="black" />
                  ),
                }}
              />
              <Tab.Screen
                name="Scan"
                component={ScannerScreenNavigator}
                options={{
                  tabBarBadge: true,
                  tabBarLabel: "ScannerPage",
                  tabBarIcon: () => (
                    <Ionicons name="barcode-outline" size={24} color="black" />
                  ),
                }}
              />
              <Tab.Screen
                name="Report"
                component={ReportScreenNavigator}
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
              <Tab.Screen
                name="Settings"
                children={() => (
                  <Settings
                    selectedAllergens={selectedAllergens}
                    setSelectedAllergens={setSelectedAllergens}
                    deleteAllergen={deleteAllergen}
                  />
                )}
                options={{
                  selectedAllergens: { selectedAllergens },
                  setSelectedAllergens: { setSelectedAllergens },
                  tabBarLabel: "Settings",
                  tabBarIcon: () => (
                    <MaterialIcons name="settings" size={24} color="black" />
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
