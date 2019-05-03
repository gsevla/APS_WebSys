import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import NavigationIcons from '../navigation'

export class ListaItensPage extends Component {
    static navigationOptions = {
        title: "Home",
        headerRight: <NavigationIcons />
      };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.superiorIcons}>
          <Text>teste</Text>
        </View>
        <View></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  superiorIcons: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center"
  }
})


export default ListaItensPage
