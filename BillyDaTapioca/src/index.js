import React, { Component } from 'react';
import { View } from 'react-native';
import { Appbar, IconButton, Modal, Portal, Text, Provider } from 'react-native-paper';
import MyComponent from './components/bottomNavigator';
import OfflineUser from './components/modal'


export class HomePage extends Component {
  state = {
    userLevel: 0,
    modalVisible: false
  }

  static navigationOptions = {
    header: (
      <Appbar.Header>
        <Appbar.Content title="Home" subtitle="Cardápio" />
        <IconButton
          icon="person"
          size={24}
          onPress={() => {
            //
          }}
        />
        <IconButton
          icon="shopping-cart"
          size={24}
          onPress={() => console.log('Pressed')}
          disabled={true}
        />
      </Appbar.Header>
    )
  };

  render() {
    return (
      <View>
        <OfflineUser sM={this.state.modalVisible} />
        <MyComponent />
      </View>
    );
  }
}

export default HomePage;
