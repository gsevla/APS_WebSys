import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { moneyFormat } from "../../services/utils";

class TotalCompras extends Component {
  render() {
    return (
      <Text style={{ fontSize: 22 }}>
        Total: R$ {moneyFormat(this.props.repassePreco)}
      </Text>
    );
  }
}

export default TotalCompras;
