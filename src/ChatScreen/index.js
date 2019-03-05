import React, { Component } from "react";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LucyChat from "./LucyChat.js";
import JadeChat from "./JadeChat.js";
import NineChat from "./NineChat.js";

const CustomBottomTabBar = props => (
  <Footer>
    <FooterTab>
      <Button
        vertical
        active={props.navigation.state.index === 0}
        onPress={() => props.navigation.navigate("Lucy")}>
        <Icon name="bowtie" />
        <Text>Lucy</Text>
      </Button>
      <Button
        vertical
        active={props.navigation.state.index === 1}
        onPress={() => props.navigation.navigate("Jade")}>
        <Icon name="briefcase" />
        <Text>Jade</Text>
      </Button>
      <Button
        vertical
        active={props.navigation.state.index === 2}
        onPress={() => props.navigation.navigate("Nine")}>
        <Icon name="headset" />
        <Text>Nine</Text>
      </Button>
    </FooterTab>
  </Footer>
);

export default createBottomTabNavigator(
  {
    Lucy: { screen: LucyChat },
    Jade: { screen: JadeChat },
    Nine: { screen: NineChat }
  },
  {
    navigationOptions: {
      drawerLabel: 'Chat',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons
          name="chat"
          size={24}
          style={{ color: tintColor }}
        />
      )
    },
    tabBarComponent: props => (
      <CustomBottomTabBar
        {...props}
        style={{ borderTopColor: '#605F60' }}
      />
    )
  },
  {
    tabBarComponent: props => (
      <CustomBottomTabBar
        {...props}
        style={{ borderTopColor: '#605F60' }}
      />
    )
  }
);