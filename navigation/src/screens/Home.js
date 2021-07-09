import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Home</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Detail', {
              umur: 18,
            })
          }>
          <Text>Move to Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
