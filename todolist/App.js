import React, {Component} from 'react';
import {Text, View} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'red',
            paddingVertical: 16,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 8,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Header
          </Text>
        </View>
      </View>
    );
  }
}

export default App;
