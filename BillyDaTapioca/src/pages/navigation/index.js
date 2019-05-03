import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

export class NavigationIcons extends Component {
  render() {
    return (
      <View style={styles.superiorIcons}>
        <TouchableOpacity
        onPress={() => {}}
        >
            <Icon style={{marginHorizontal: 5}} name="user" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {}}
        >
            <Icon style={{marginHorizontal: 5}} name="shopping-cart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    superiorIcons: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-end",
        paddingHorizontal: 15
      }
})


export default NavigationIcons
