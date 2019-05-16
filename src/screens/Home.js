import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Card from "../components/Card";
import CarrinhoIndicator from "../components/carrinhoIndicator";

export default class Home extends Component {
  state = {
    carrinho: {},
    usuario: {}
  };

  addCarrinho = produtos => {};

  render() {
    return (
      <View style={styles.container}>
        <Card
          icon=""
          title="Tapiocas"
          navigate={() => this.props.navigation.navigate("Tapiocas")}
        />
        <Card icon="" title="Bebidas" navigate={() => {}} />
        <Card icon="" title="Pedidos" navigate={() => {}} />
        <Card icon="" title="Tapiocas" navigate={() => {}} />
        <CarrinhoIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  }
});
