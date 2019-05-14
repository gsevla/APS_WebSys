import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import ListaTapiocas from '../screens/Tapiocas';
import ListaBebidas from '../screens/Bebidas';
import ListaCompras from '../screens/Compras';

const Tabs = createMaterialBottomTabNavigator(
  {
    A: {
      screen: ListaTapiocas,
      navigationOptions: {
        tabBarLabel: 'Tapiocas',
        tabBarIcon: ({ tintColor }) => <Icon name="blur-circular" size={20} />,
      },
    },
    B: {
      screen: ListaBebidas,
      navigationOptions: {
        tabBarLabel: 'Bebidas',
        tabBarIcon: ({ tintColor }) => <Icon name="local-cafe" size={20} />,
      },
    },
    C: {
      screen: ListaCompras,
      navigationOptions: {
        tabBarLabel: 'Compras',
        tabBarIcon: ({ tintColor }) => <Icon name="view-list" size={20} />,
      },
    },
  },
  {
    initialRouteName: 'A',
    shifting: true,
  }
);

export default Tabs;
