import React, { Component } from "react";
import { Text } from "react-native-paper";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

let { height, width } = Dimensions.get("window");

export default (Card = props => {
  return (
    <TouchableNativeFeedback onPress={props.navigate}>
      <View style={styles.container}>
        <Icon color={props.color} name={props.icon} size={45} />
        <Text style={{ fontSize: 18 }}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "white",
    width: 0.4 * width,
    height: 0.2 * height,
    elevation: 5
  }
});
