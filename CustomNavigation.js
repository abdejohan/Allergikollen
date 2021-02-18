import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import NestedScreen from "./screens/NestedScreen";
import Home from "./screens/Home";
import NewScanner from "./screens/NewScanner";
import Report from "./screens/Report";

const Stack = createStackNavigator(); // creates object for Stack Navigator

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NestedHome" component={NestedScreen} />
    </Stack.Navigator>
  );
};

export { FirstScreenNavigator }; // Stack-Navigator for Screen 1 Tab

const SecondScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewScanner" component={NewScanner} />
      <Stack.Screen name="NestedNewScanner" component={NestedScreen} />
    </Stack.Navigator>
  );
};

export { SecondScreenNavigator }; // Stack-Navigator for Screen 2 Tab

const ThirdScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen name="NestedReport" component={NestedScreen} />
    </Stack.Navigator>
  );
};

export { ThirdScreenNavigator }; // Stack-Navigator for Screen 3 Tab
