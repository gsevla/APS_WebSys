import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Appbar, Text, IconButton } from 'react-native-paper'



export class HomePage extends Component {

    _goBack = () => console.log('Went back');

  render() {
    return (
        <Appbar.Header>
            {/* <Appbar.BackAction
            onPress={this._goBack}
            /> */}
            <Appbar.Content
            title="Home"
            subtitle="Cardápio"
            />
            <IconButton
                icon="person"

                size={24}
                onPress={() => console.log('Pressed')}
            />
            <IconButton
                icon="shopping-cart"

                size={24}
                onPress={() => console.log('Pressed')}
            />
        </Appbar.Header>
    )
  }
}

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
});

export default HomePage
