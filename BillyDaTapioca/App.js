import React, {Component} from 'react';
import { DefaultTheme ,Provider as PaperProvider, Portal, Modal, Text } from 'react-native-paper';
import AppNavigator from "./src/routes";



const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'brown',
    accent: 'yellow',
    background: '#f8f9f9',
    disabled: '#a6acaf'
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  state = {
    visible: false
  };
  
  _showModal = () => this.setState({ visible: true });
  _hideModal = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
      <PaperProvider theme={theme}>
        <Portal>
          <Modal visible={visible} onDismiss={this._hideModal}>
              <Text>Example Modal</Text>
          </Modal>
        </Portal>
        <AppNavigator />
      </PaperProvider>
    );
  }
}

export default App;