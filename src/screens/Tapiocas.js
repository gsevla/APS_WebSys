import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { List, Text, Button, Appbar } from "react-native-paper";
import api from "../services/api";
import TotalCompras from "../components/totalCompra";
import { moneyFormat } from "../services/utils";
import CarrinhoIndicator from "../components/carrinhoIndicator";

export class ListaTapiocas extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.BackAction
            onPress={ () => {
              navigation.getParam('addCarrinho')(navigation.getParam('localCar')());
              navigation.pop()
            }}
          />
          <Appbar.Content
            title="Tapiocas"
          />
        </Appbar.Header>
      )
    };
  };


  state = {
    tapiocas: [],
    precoTotal: 0,
    userLevel: 0
  };

  componentDidMount() {
    this.getTapiocas();
    this.props.navigation.setParams({localCar: this.returnTapiocasList});
  }

  getTapiocas = async () => {
    const r = await api.get("/tapiocas");

    const items = r.data;
    const tapiocas = items.map(item => {
      return { ...item, qtde: 0 };
    });

    await this.setState({ tapiocas: tapiocas });
  };

  renderItems = ({ item }) => (
    <View
      styles={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <List.Item
        title={item.descricao}
        description={`R$ ${moneyFormat(item.valor)}`}
        titleEllipsizeMode="middle"
        left={props => (
          <Button
            onPress={() => console.log("Pressed")}
            icon="notifications"
            mode="outline"
            compact="true"
            disabled={item.disponibilidade}
          />
        )}
        right={props => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Button
              onPress={async () => {
                let price = 0;
                const newTapiocas = this.state.tapiocas.map(tapioca => {
                  if (tapioca.id == item.id) {
                    if (tapioca.qtde > 0) {
                      tapioca.qtde = tapioca.qtde - 1;
                      price = price + tapioca.valor;
                    }
                  }
                  return tapioca;
                });
                await this.setState({
                  tapiocas: newTapiocas,
                  precoTotal: this.state.precoTotal - price,
                });
              }}
              icon="expand-more"
              mode="outline"
              compact="true"
              disabled={!item.disponibilidade}
            />

            <Text style={{ marginTop: 10 }}>{item.qtde}</Text>

            <Button
              onPress={async () => {
                let price = 0;
                const newTapiocas = this.state.tapiocas.map(tapioca => {
                  if (tapioca.id == item.id) {
                    tapioca.qtde = tapioca.qtde + 1;
                    price = price + tapioca.valor;
                  }
                  return tapioca;
                });
                await this.setState({
                  tapiocas: newTapiocas,
                  precoTotal: this.state.precoTotal + price,
                });
              }}
              icon="expand-less"
              mode="outline"
              compact="true"
              disabled={!item.disponibilidade}
            />
          </View>
        )}
      />
    </View>
  );

  lenCarrinhoGlobal = () => {
    let carrinho = this.props.navigation.getParam('getCarrinho')();

    let list = this.returnTapiocasList();
    
    return carrinho.length+list.length;
  }

  returnTapiocasList = () => {
    let list = this.state.tapiocas.filter((tapioca) => {
      return tapioca.qtde > 0
    })

    return list;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.tapiocas}
          keyExtractor={tapioca => tapioca.id.toString()}
          renderItem={this.renderItems}
        />

        <View
          style={{
            alignSelf: "flex-end"
          }}
        >
          <TotalCompras repassePreco={this.state.precoTotal} />
        </View>
        {this.lenCarrinhoGlobal() ? <CarrinhoIndicator /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default ListaTapiocas;
