import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './common/Header';
import LibraryList from './components/LibraryList';

export default class App extends Component {
  render() {
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Tech Stacks!"/>
          <LibraryList />
        </View>
      </Provider>
    );
  }
}