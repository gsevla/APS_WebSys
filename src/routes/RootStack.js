import React from "react";
import { createStackNavigator } from "react-navigation";
import { Appbar, IconButton, Badge } from "react-native-paper";
import Tabs from "./Tabs";
import Modal from "../components/modal";
import Login from "../screens/Login";
import Icon from "react-native-vector-icons/MaterialIcons";

const RootStack = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: ({ navigation }) => {
      return {
        header: (
          <Appbar.Header>
            <Appbar.Content title={'Billy'} subtitle="Tapiocas e Bebidas" />
            <IconButton
              icon="person"
              size={24}
              onPress={() => {
                {
                  global.user.isLogged
                    ? alert("Você já está logado")
                    : navigation.push("Modal");
                }
              }}
            />
            {global.user.isLogged ? (
              <Badge style={{ position: "relative", top: -5, right: 15 }}>
                <Icon name="check" size={15} color="white" />
              </Badge>
            ) : null}
            <IconButton
              icon="shopping-cart"
              size={24}
              onPress={() => {}}
              disabled={false}
            />
          </Appbar.Header>
        )
      };
    }
  },
  Modal: Modal,
  Login: Login
});

export default RootStack;
