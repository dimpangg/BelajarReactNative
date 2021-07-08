import React, {Component} from 'react';
import {Text, View} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            // textDecorationLine: 'underline line-through',
            letterSpacing: 5,
          }}>
          <Text style={{color: 'red'}}>Hello </Text>
          <Text style={{color: 'blue'}}>World!</Text>
        </Text>
      </View>
    );
  }
}

export default App;
