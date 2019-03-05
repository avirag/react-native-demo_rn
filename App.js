/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeDrawerNavigator from "./src/HomeScreen/index.js";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeDrawerNavigator
    }
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);
