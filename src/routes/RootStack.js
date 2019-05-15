import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Appbar, IconButton } from 'react-native-paper';
import Tabs from './Tabs';
import Modal from '../components/modal';
import Login from '../screens/Login';

const RootStack = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: ({ navigation }) => {
      return {
        header: (
          <Appbar.Header>
            <Appbar.Content title="Billy" subtitle="Tapiocas e Bebidas" />
            <IconButton
              icon="person"
              size={24}
              onPress={() => {
                navigation.push('Modal');
              }}
            />
            <IconButton
              icon="shopping-cart"
              size={24}
              onPress={() => console.log('Pressed')}
              disabled={true}
            />
          </Appbar.Header>
        ),
      };
    },
  },
  Modal: Modal,
  Login: Login,
});

export default RootStack;
