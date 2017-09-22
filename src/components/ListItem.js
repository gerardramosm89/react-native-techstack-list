import React, { Component } from 'react';
import { CardSection } from '../common';
import { Text } from 'react-native';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <CardSection>
        <Text>{this.props.library.title}</Text>
      </CardSection>
    );
    
  }
}

export default ListItem;