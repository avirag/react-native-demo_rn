import React from 'react';
import { createStackNavigator } from "react-navigation";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ProfileScreen from "./ProfileScreen.js";
import EditScreenOne from "./EditScreenOne.js";
import EditScreenTwo from "./EditScreenTwo.js";


export default createStackNavigator(
  {
    Profile: { screen: ProfileScreen },
    EditOne: { screen: EditScreenOne },
    EditTwo: { screen: EditScreenTwo }
  },
  {
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons
          name="account-box"
          size={24}
          style={{ color: tintColor }}
        />
      )
    }
  }
);