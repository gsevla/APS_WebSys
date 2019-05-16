import React, { Component } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';


let { height, width } = Dimensions.get("window");

export default class CarrinhoIndicator extends Component {

  render() {
      
    return (
        <TouchableNativeFeedback
         onPress={() => {}}
        >
             <View style={styles.container}>
            
                <View style={styles.box}>
                    <Text style={{fontSize: 14, color: 'white'}}>R${`${this.props.valor}`}</Text>
                    <Text style={{fontSize: 16, color: 'white'}}>Ver carrinho</Text>
                    <Text style={{fontSize: 14, color: 'white'}}>{`4`}</Text>
                </View>
            
        </View>
        </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'brown',
        width: width,
        height: height* 0.075,
        borderRadius: 4
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})
