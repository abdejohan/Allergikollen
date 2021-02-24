import React, { useState } from "react";
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
import Settings from "./pages/Settings";
import IntroPage from "./pages/IntroPage";
import {
  HomeScreenNavigator,
  ScannerScreenNavigator,
  SupportScreenNavigator,
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
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        {!loaded ? (
          <IntroPage />
        ) : (
          <NavigationContainer>
            <Tab.Navigator
              shifting={true}
              initialRouteName="Scan"
              activeColor="black"
              inactiveColor="grey"
              barStyle={{ backgroundColor: "white" }}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreenNavigator}
                options={{
                  tabBarLabel: "Mina Sidor",
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
                  tabBarLabel: "Scanna",
                  tabBarIcon: () => (
                    <Ionicons name="barcode-outline" size={24} color="black" />
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
                  tabBarLabel: "Inställningar",
                  tabBarIcon: () => (
                    <MaterialIcons name="settings" size={24} color="black" />
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
                      color="black"
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
