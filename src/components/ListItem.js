import React, { Component } from 'react';
import { CardSection } from '../common';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  renderDescription() {
    console.log('hit renderDescription');
    console.log('this.props is: ', this.props);
    if (this.props.library.id === this.props.selectedLibraryId) {
      return (
        <Text>
          {this.props.library.description}
        </Text>
      )
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    console.log(this.props);
    return(
      <TouchableWithoutFeedback
      onPress={() => {
        this.props.selectLibrary(id)
      }}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
    
  }
}

styles = {
  titleStyle: {
    fontSize: 18
  }
};

const mapStateToProps = state => {
  return {
    selectedLibraryId: state.selectedLibraryId
  }
}
export default connect(mapStateToProps, actions)(ListItem);