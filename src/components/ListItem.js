import React, { Component } from 'react';
import { CardSection } from '../common';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { expanded, library } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1}}>
            {library.description}
          </Text>
        </CardSection>
        
      )
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
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

const mapStateToProps = (state, ownProps) => {

  const expanded = state.selectedLibraryId === ownProps.library.id;

  return {
    expanded
  }
}
export default connect(mapStateToProps, actions)(ListItem);