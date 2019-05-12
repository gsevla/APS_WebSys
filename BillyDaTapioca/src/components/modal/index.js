import * as React from 'react';
import { Modal, Portal, Text, Button } from 'react-native-paper';
import { connect } from 'react-redux';


const UserModal = ({ appReducer, dispatch }) => {
  console.log(appReducer.modalVisibility);
  return (
    <Portal>
         <Modal visible={appReducer.modalVisibility} onDismiss={this._hideModal}>
           <Text>Example Modal</Text>
         </Modal>
       </Portal>
  )
}

const mapStateToProps = state => ({
  appReducer: state.appReducer
});

export default connect(mapStateToProps)(UserModal);