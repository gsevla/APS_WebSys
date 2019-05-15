import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { List, Text, Button } from 'react-native-paper';
import api from '../services/api';
import TotalCompras from '../components/totalCompra';
import textManipulation from '../services/textManipulation';

// export class ListaBebidas extends Component {
//   state ={
//     bebidas: [],
//     precoTotal: 0
//   }

//   componentDidMount() {
//     this.getBebidas();
//   }

//   getBebidas = async () => {
//     const r = await api.get('/bebidas');

//     const items = r.data;
//     let l = [];
//     const newItems = items.forEach((item) => {
//       l.push({item, qtde:0, compra:false});
//     });

//     this.setState({ bebidas: l });
//     console.log(this.state.bebidas);
//   };

//   renderItems = ({item}) => (
//     <View
//     styles={{
//       flex:1,
//       flexDirection:'row',
//       justifyContent: 'space-between'
//     }}
//     >
//       <List.Item
//         title={this.textManipulation.capitalizeText(item.item.Descricao)}
//         description={`R$ ${parseFloat(item.item.Valor)}`}
//         titleEllipsizeMode='middle'
//         left={props =>
//           <Button
//             onPress={() => console.log('Pressed')}
//             icon="priority-high"
//             mode="outline"
//             compact="true"
//             disabled={item.item.Disponibilidade}
//           >
//           </Button>
//         }
//         right={props =>
//         <View style={{
//           flex:1,
//           flexDirection: 'row',
//           justifyContent: 'space-around'
//         }}
//         >
//           <Button
//             onPress={ async () => {
//               let price = 0;
//               const newBebidas = this.state.bebidas.map(bebida => {
//                 if(bebida.item.id == item.item.id) {
//                   if(bebida.qtde > 0) {
//                     bebida.qtde = bebida.qtde - 1;
//                     price = price + bebida.item.Valor;
//                   }
//                 }
//                 return bebida;
//               });
//               console.log(price);
//               await this.setState({bebidas: newBebidas, precoTotal: this.state.precoTotal-price});
//             }}
//             icon="expand-more"
//             mode="outline"
//             compact="true"
//             disabled={!item.item.Disponibilidade}
//           >
//           </Button>

//           <Text style={{ marginTop: 10 }}>{item.qtde}</Text>

//           <Button
//             onPress={ async () => {
//               let price = 0;
//               const newBebidas = this.state.bebidas.map(bebida => {
//                 if(bebida.item.id == item.item.id) {
//                   bebida.qtde = bebida.qtde + 1;
//                   price = price + bebida.item.Valor;
//                 }
//                 return bebida;
//               });
//               console.log(price);
//               await this.setState({bebidas: newBebidas, precoTotal: this.state.precoTotal+price});
//               console.log(this.state.precoTotal);
//             }}
//             icon="expand-less"
//             mode="outline"
//             compact="true"
//             disabled={!item.item.Disponibilidade}
//             >
//           </Button>
//         </View>
//         }
//       />
//     </View>
//   );

//   render() {
//     return (
//       <View styles={styles.container}>
//         <FlatList
//           data={this.state.bebidas}
//           keyExtractor={bebida => (bebida.item.id).toString()}
//           renderItem={this.renderItems}
//         />
//         <TotalCompras repassePreco={this.state.precoTotal} />
//       </View>
//     )
//   }
// }

const ListaBebidas = () => {
  return (
    <View>
      <Text>Bebidas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ListaBebidas;
