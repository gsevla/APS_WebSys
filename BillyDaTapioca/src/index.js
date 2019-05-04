import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text, IconButton } from 'react-native-paper';

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
        />
      </Appbar.Header>
    ),
  };

  _goBack = () => console.log('Went back');

  render() {
    return (
      <View style={styles.container}>
        <Text>Toquei a bola, agora faz o gol</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
