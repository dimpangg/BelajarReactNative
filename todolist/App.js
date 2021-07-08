import React, {Component} from 'react';
import {Text, View, StatusBar, Image} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="default" backgroundColor="#2196f3" />
        <View
          style={{
            backgroundColor: '#2196f3',
            paddingVertical: 16,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 8,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Header
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 16,
          }}>
          <Image
            source={require('./src/images/img-1.png')}
            style={{
              width: 300,
              height: 300,
              borderWidth: 2,
              borderColor: '#eee',
            }}
          />
        </View>
      </View>
    );
  }
}

export default App;
