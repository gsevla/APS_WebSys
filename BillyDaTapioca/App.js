import React, { Component } from 'react';
import {
  DefaultTheme,
  Provider as PaperProvider,
  Portal,
  Modal,
  Text,
  Appbar,
  IconButton,
} from 'react-native-paper';
import { Text, View } from 'react-native';
import AppNavigator from './src/routes';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import ListaTapiocas from './src/components/listaItens/tapiocas';
import ListaBebidas from './src/components/listaItens/bebidas';
import ListaCompras from './src/components/listaItens/compras';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'brown',
    accent: 'yellow',
    background: '#f8f9f9',
    disabled: '#a6acaf',
  },
};

const tabs = createMaterialBottomTabNavigator(
  {
    A: ListaTapiocas,
    B: ListaBebidas,
    C: ListaCompras,
  },
  {
    initialRouteName: 'A',
  }
);

const stack = createStackNavigator(
  {
    tabs: {
      screen: tabs,
      navigationOptions: { title: 'Header title' },
    },
    modal: {
      screen: (
        <View>
          <Text>dfdf</Text>
        </View>
      ),
    },
  },
  {
    defaultNavigationOptions: {
      header: (
        <Appbar.Header>
          <Appbar.Content title="Home" subtitle="Cardápio" />
          <IconButton
            icon="person"
            size={24}
            onPress={() => {
              console.log(navigation);
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
    },
  }
);

export default createAppContainer(stack);
