import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'


class TotalCompras extends Component {
    render() {
        return (
            <Text style={{fontSize: 22}}>Total: { this.props.repassePreco } </Text>
        );
    }
}




export default TotalCompras
