import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default class Home extends Component {

    state = {
        carrinho: {},
        usuario: {},
    }

    addCarrinho = (produtos) => {

    }

  render() {
    return (
      <View>
        <Button
          icon="home"
          mode="contained"
          onPress={() => this.props.navigation.navigate('Tapiocas')}
        >
          Press me
        </Button>
      </View>
    );
  }
}
