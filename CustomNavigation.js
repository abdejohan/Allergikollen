import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Pages and Screens
import Home from "./pages/Home";
import ProductScreen from "./screens/ProductScreen";
import OpenScanner from "./screens/OpenScanner";
import ScannerPage from "./pages/ScannerPage";
import Support from "./pages/Support";
import IntroPage from "./pages/IntroPage";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
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

const SupportScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="IntroPage" component={IntroPage} />
    </Stack.Navigator>
  );
};

export { SupportScreenNavigator };
