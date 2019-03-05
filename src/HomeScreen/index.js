import { createDrawerNavigator } from "react-navigation";

import ChatBottomTabNavigator from "../ChatScreen/index.js";
import ProfileStackNavigator from "../ProfileScreen/index.js";


const HomeDrawerNavigator = createDrawerNavigator(
  {
    Profile: { screen: ProfileStackNavigator },
    Chat: { screen: ChatBottomTabNavigator }
  },
  {
    initialRouteName: 'Profile',
    contentOptions: {
      activeTintColor: '#e91e63'
    }
  }
);

export default HomeDrawerNavigator;