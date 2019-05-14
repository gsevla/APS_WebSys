import React, { Component } from 'react';
import { View } from 'react-native';
import { Appbar, IconButton, Modal, Portal, Text, Provider as PaperProvider } from 'react-native-paper';
import BottomNavigator from './components/bottomNavigator';


export class HomePage extends Component {
  
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.Content title="Home" subtitle="Cardápio" />
          <IconButton
            icon="person"
            size={24}
            onPress={() => {console.log(navigation)}}
            />
          <IconButton
            icon="shopping-cart"
            size={24}
            onPress={() => console.log('Pressed')}
            disabled={true}
            />
        </Appbar.Header>
      )
    }
  };

  render() {
    return (
        <BottomNavigator />
    );
  }
}

export default HomePage;
