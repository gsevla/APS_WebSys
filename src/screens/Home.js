import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Card from "../components/Card";

export default class Home extends Component {
  state = {
    carrinho: {},
    usuario: {}
  };

  addCarrinho = produtos => {};

  render() {
    return (
      <View style={styles.container}>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap'
  }
});
