import React, {Component} from 'react';
import {Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Home',
    };
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
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            {this.state.header}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 16,
          }}
          onPress={() => console.log('halo')}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1565574337622-c456ba77d4b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80',
            }}
            style={{
              width: 300,
              height: 300,
              borderWidth: 2,
              borderColor: 'pink',
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'lightblue',
            paddingVertical: 16,
            margin: 8,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Click
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
