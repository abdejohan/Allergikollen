import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import Home from "./pages/Home";
import ScannerPage from "./pages/ScannerPage";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

// Screens
import ProductScreen from "./screens/ProductScreen";
import OpenScanner from "./screens/OpenScanner";
import Allergikollen from "./screens/Allergikollen";
import Kundtjanst from "./screens/Kundtjanst";
import Kontakt from "./screens/Kontakt";
import Hjalp from "./screens/Hjalp";
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

const SettingsScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export { SettingsScreenNavigator };

const SupportScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Allergikollen" component={Allergikollen} />
      <Stack.Screen name="Kundtjanst" component={Kundtjanst} />
      <Stack.Screen name="Kontakt" component={Kontakt} />
      <Stack.Screen name="Hjalp" component={Hjalp} />
    </Stack.Navigator>
  );
};

export { SupportScreenNavigator };
