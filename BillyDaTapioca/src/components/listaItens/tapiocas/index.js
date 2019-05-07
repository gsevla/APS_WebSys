import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { List, Text, Button } from 'react-native-paper';
import api from '../../../services/api';
import TotalCompras from '../../totalCompra';

export class ListaTapiocas extends Component {
  state = {
    tapiocas: [],
    precoTotal: 0
  };


  componentDidMount() {
    this.getTapiocas();
  }


  capitalizeText = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  };


  getTapiocas = async () => {
    const r = await api.get('/tapiocas');

    const items = r.data;
    let l = [];
    const newItems = items.forEach((item) => {
      l.push({item, qtde:0, compra:false});
    });

    this.setState({ tapiocas: l });
    console.log(this.state.tapiocas);
  };


  renderItems = ({item}) => (
    <View
    styles={{
      flex:1,
      flexDirection:'row',
      justifyContent: 'space-between'
    }}
    >
      <List.Item
        title={this.capitalizeText(item.item.Descricao)}
        description={`R$ ${parseFloat(item.item.Valor)}`}
        titleEllipsizeMode='middle'
        left={props => 
          <Button
            onPress={() => console.log('Pressed')}
            icon="priority-high"
            mode="outline"
            compact="true"
            disabled={item.item.Disponibilidade}
          >
          </Button>
        }
        right={props => 
        <View style={{
          flex:1,
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
        >
          <Button
            onPress={ async () => {
              let price = 0;
              const newTapiocas = this.state.tapiocas.map(tapioca => {
                if(tapioca.item.id == item.item.id) {
                  if(tapioca.qtde > 0) {
                    tapioca.qtde = tapioca.qtde - 1;
                    price = price + tapioca.item.Valor;
                  } 
                }
                return tapioca;
              });
              console.log(price);
              await this.setState({tapiocas: newTapiocas, precoTotal: this.state.precoTotal-price});
            }}
            icon="expand-more"
            mode="outline"
            compact="true"
            disabled={!item.item.Disponibilidade}
          >
          </Button>

          <Text style={{ marginTop: 10 }}>{item.qtde}</Text>

          <Button
            onPress={ async () => {
              let price = 0;
              const newTapiocas = this.state.tapiocas.map(tapioca => {
                if(tapioca.item.id == item.item.id) {
                  tapioca.qtde = tapioca.qtde + 1;
                  price = price + tapioca.item.Valor;
                }
                return tapioca;
              });
              console.log(price);
              await this.setState({tapiocas: newTapiocas, precoTotal: this.state.precoTotal+price});
              console.log(this.state.precoTotal);
            }}
            icon="expand-less"
            mode="outline"
            compact="true"
            disabled={!item.item.Disponibilidade}
            >
          </Button>
        </View>
        }
      />
    </View>
  );


  render() {
    return (
      <View styles={styles.container}>
        <FlatList
          data={this.state.tapiocas}
          keyExtractor={tapioca => (tapioca.item.id).toString()}
          renderItem={this.renderItems}
        />
        <TotalCompras repassePreco={this.state.precoTotal} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})


export default ListaTapiocas
