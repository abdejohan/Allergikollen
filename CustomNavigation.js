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

/* these options will change the appreance of 
 the top navigation bar inside every screen/page. 
 Every navigation bar may also have its own custom options*/
const sharedOptions = {
  headerTintColor: "white",
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: "rgba(50, 159, 91, 0.24)",
  },
};

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          ...sharedOptions,
          title: "Hem",
        }}
      />
    </Stack.Navigator>
  );
};

export { HomeScreenNavigator };

const ScannerScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScannerPage"
        component={ScannerPage}
        options={{
          ...sharedOptions,
          title: "Sök produkt",
        }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          ...sharedOptions,
          title: "Produkt Info",
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="OpenScanner"
        component={OpenScanner}
        options={{
          ...sharedOptions,
          title: "Scanner",
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};

export { ScannerScreenNavigator }; //

const SettingsScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          ...sharedOptions,
          title: "Inställningar",
        }}
      />
    </Stack.Navigator>
  );
};

export { SettingsScreenNavigator };

const SupportScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Support"
        component={Support}
        options={{
          ...sharedOptions,
          title: "Support",
        }}
      />
      <Stack.Screen
        name="Allergikollen"
        component={Allergikollen}
        options={{
          ...sharedOptions,
          title: "Allergikollen",
        }}
      />
      <Stack.Screen
        name="Kundtjanst"
        component={Kundtjanst}
        options={{
          ...sharedOptions,
          title: "Kundtjänst",
        }}
      />
      <Stack.Screen
        name="Kontakt"
        component={Kontakt}
        options={{
          ...sharedOptions,
          title: "Kontakt",
        }}
      />
      <Stack.Screen
        name="Hjalp"
        component={Hjalp}
        options={{
          ...sharedOptions,
          title: "Hjälp",
        }}
      />
    </Stack.Navigator>
  );
};

export { SupportScreenNavigator };
