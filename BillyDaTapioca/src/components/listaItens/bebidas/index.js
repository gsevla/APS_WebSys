import React, { Component } from 'react'
import { List } from 'react-native-paper'

export class ListaBebidas extends Component {
  render() {
    return (
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
    )
  }
}

export default ListaBebidas
