import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import { List, Text, Button } from 'react-native-paper'

export class ListaTapiocas extends Component {
  state = {
    tapiocas: [
      {
        id: 0,
        nome: "Frango",
        descricao: "frango desfiado",
        estoque: true
      },
      {
        id: 1,
        nome: "Frango com Catupiry",
        descricao: "frango desfiado, catupiry",
        estoque: false
      }
    ]
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
        title={item.nome}
        description={item.descricao}
        titleEllipsizeMode='middle'
        left={props => 
          <Button
            onPress={() => console.log('Pressed')}
            icon="priority-high"
            mode="outline"
            compact="true"
            disabled={() => {
              if(item.estoque) {
                return false
              } else {
                return true
              }
            }}
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
            onPress={() => console.log('Pressed')}
            icon="expand-more"
            mode="outline"
            compact="true"
          >
          </Button>

          <Text style={{ marginTop: 10 }}>0</Text>

          <Button
            onPress={() => console.log('Pressed')}
            icon="expand-less"
            mode="outline"
            compact="true"
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
          keyExtractor={item => item.id}
          renderItem={this.renderItems}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})


export default ListaTapiocas
