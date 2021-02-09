import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import { JournalScreen, MeasuresScreen, TreatmentScreen, ProfileScreen } from "./screens";


const TabNavigator = createBottomTabNavigator (
  {
    Journal: {
      screen: JournalScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name="book-medical" size={14} color="orange" />
      }
    },
    Measures: {
      screen: MeasuresScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name="heart-beat" size={14} color="orange" />
      }
    },
    Treatment: {
      screen: TreatmentScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name="band-aid" size={14} color="orange" />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name="user" size={14} color="orange" />
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);

export default createAppContainer(TabNavigator);
