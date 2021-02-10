import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Screens
import Home from "./screens/Home";
import IntroPage from "./screens/IntroPage";
import Scanner from "./screens/Scanner";
import Report from "./screens/Report";
import Livsmedelsverket from "./screens/Livsmedelsverket";



const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const [ loaded, setLoaded ] = useState(null);
  setTimeout(function(){ setLoaded("loaded"); }, 2000);
  return (
    <>
      {!loaded ? <IntroPage /> : (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Scan" component={Scanner} />
            <Tab.Screen name="Report" component={Report} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

export default App;