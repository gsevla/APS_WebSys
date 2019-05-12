import React, { Component } from 'react';
import { View } from 'react-native';
import { Appbar, IconButton, Modal, Portal, Text, Provider as PaperProvider } from 'react-native-paper';
import BottomNavigator from './components/bottomNavigator';
import { connect } from 'react-redux';


export class HomePage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Appbar.Header>
          <Appbar.Content title="Home" subtitle="Cardápio" />
          <IconButton
            icon="person"
            size={24}
            onPress={() => {}}
            />
          <IconButton
            icon="shopping-cart"
            size={24}
            onPress={() => console.log('Pressed')}
            disabled={true}
            />
        </Appbar.Header>
      )
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({  })
  }

  render() {
    return (
        <BottomNavigator />
    );
  }
}

const mapStateToProps = state => ({
  appReducer: state.appReducer
});

export default connect(mapStateToProps)(HomePage);
