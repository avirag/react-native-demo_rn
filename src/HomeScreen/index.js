import React from 'react';
import { createDrawerNavigator } from "react-navigation";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ChatBottomTabNavigator from "../ChatScreen/index.js";
import ProfileStackNavigator from "../ProfileScreen/index.js";
import HomeScreen from "./HomeScreen";


const HomeDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons
            name="home"
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Profile: { screen: ProfileStackNavigator },
    Chat: { screen: ChatBottomTabNavigator }
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63'
    }
  }
);

export default HomeDrawerNavigator;