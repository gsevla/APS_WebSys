import React, { Component } from 'react';
import { Appbar, IconButton, Modal, Portal, Text, Provider } from 'react-native-paper';
import MyComponent from './components/bottomNavigator';
import OfflineUser from './components/modal/offlineUser'


export class HomePage extends Component {
  
  static navigationOptions = {
    header: (
      <Appbar.Header>
        <Appbar.Content title="Home" subtitle="Cardápio" />
        <IconButton
          icon="person"
          size={24}
          onPress={() => console.log('Pressed')}
        />
        <IconButton
          icon="shopping-cart"
          size={24}
          onPress={() => console.log('Pressed')}
          disabled="true"
        />
      </Appbar.Header>
    ),
  };

  render() {
    return (
      <MyComponent />
    );
  }
}

export default HomePage;
