import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

export default class OfflineUser extends React.Component {
  state = {
    visible: this.props.sM,
    userLevel: 0
  };

  _showModal = () => this.setState({ visible: true });
  _hideModal = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
     <Provider>
       <Portal>
         <Modal visible={visible} onDismiss={this._hideModal}>
           <Text>Example Modal</Text>
         </Modal>
       </Portal>
     </Provider>
    );
  }
}