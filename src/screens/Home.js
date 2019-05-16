import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";
import { Appbar, Text } from "react-native-paper";

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.Content
            title="Lanchonete do Billy"
            subtitle="Tapiocas e bebidas"
          />
        </Appbar.Header>
      )
    };
  };
  state = {
    carrinho: [
      {
        // id: '',
        // qnt: '',
        // valor: '',
        // descricao: '',
        // disponibilidade: '',
      }
    ],
    usuario: {}
  };

  addCarrinho = produtos => {
    this.setState({
      carrinho: [...carrinho, ...produtos]
    });
  };

  getCarrinho = () => {
    return this.state.carrinho;
  };

  getValorCarrinho = () => {
    let somatorio = 0;
    this.state.carrinho.map(item => {
      somatorio += item.valor;
    });
    return somatorio;
  };

  goToCarrinho = () => {
    this.props.navigation.navigate("Carrinho");
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Card
            icon="stroopwafel"
            color="#168"
            title="Tapiocas"
            navigate={() =>
              this.props.navigation.navigate("Tapiocas", {
                addCarrinho: this.addCarrinho,
                getValorCarrinho: this.getValorCarrinho,
                getCarrinho: this.getCarrinho,
                goToCarrinho: this.goToCarrinho
              })
            }
          />
          <Card
            icon="coffee"
            color="#733"
            title="Bebidas"
            navigate={() =>
              this.props.navigation.navigate("Bebidas", {
                addCarrinho: this.addCarrinho,
                getValorCarrinho: this.getValorCarrinho,
                getCarrinho: this.getCarrinho,
                goToCarrinho: this.goToCarrinho
              })
            }
          />
          <Card
            icon="receipt"
            color="#598"
            title="Pedidos"
            navigate={() => this.props.navigation.navigate("Compras")}
          />
          {/* <Card icon="" title="Tapiocas" navigate={() => {}} /> */}
        </View>
        <Text>dfdf</Text>
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
