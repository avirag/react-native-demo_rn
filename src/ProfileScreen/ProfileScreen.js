import React, { Component } from "react";
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from "native-base";

export default class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("EditOne")}>
            <Text>Goto Profile One</Text>
          </Button>

          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("EditTwo")}>
            <Text>Goto Profile Two</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

ProfileScreen.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Profile</Title>
      </Body>
      <Right />
    </Header>
  )
});
