import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LucyChat from "./LucyChat.js";
import JadeChat from "./JadeChat.js";
import NineChat from "./NineChat.js";

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
    }
  }
  // {
  //   tabBarPosition: "bottom",
  //   tabBarComponent: props => {
  //     return (
  //       <Footer>
  //         <FooterTab>
  //           <Button
  //             vertical
  //             active={props.navigationState.index === 0}
  //             onPress={() => props.navigation.navigate("LucyChat")}>
  //             <Icon name="bowtie" />
  //             <Text>Lucy</Text>
  //           </Button>
  //           <Button
  //             vertical
  //             active={props.navigationState.index === 1}
  //             onPress={() => props.navigation.navigate("JadeChat")}>
  //             <Icon name="briefcase" />
  //             <Text>Nine</Text>
  //           </Button>
  //           <Button
  //             vertical
  //             active={props.navigationState.index === 2}
  //             onPress={() => props.navigation.navigate("NineChat")}>
  //             <Icon name="headset" />
  //             <Text>Jade</Text>
  //           </Button>
  //         </FooterTab>
  //       </Footer>
  //     );
  //   }
  // }
);
