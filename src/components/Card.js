import React, { Component } from "react";
import { Text } from "react-native-paper";
import { View, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default (Card = props => {
  let { height, width } = Dimensions.get("window");

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        backgroundColor: "white",
        width: 0.40 * width,
        height: 0.2 * height,
        elevation: 5
      }}
    >
      <Icon name="rocket" size={45} color="#900" />
      <Text style={{ fontSize: 18 }}>Tapioca</Text>
    </View>
  );
});
