import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Pages and Screens
import NestedScreen from "./screens/NestedScreen";
import Home from "./pages/Home";
import ProductScreen from "./screens/ProductScreen";
import OpenScanner from "./screens/OpenScanner";
import ScannerPage from "./pages/ScannerPage";
import Report from "./pages/Report";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NestedHome" component={NestedScreen} />
    </Stack.Navigator>
  );
};

export { HomeScreenNavigator };

const ScannerScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScannerPage" component={ScannerPage} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="OpenScanner" component={OpenScanner} />
    </Stack.Navigator>
  );
};

export { ScannerScreenNavigator }; //

const ReportScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen name="NestedReport" component={NestedScreen} />
    </Stack.Navigator>
  );
};

export { ReportScreenNavigator };
