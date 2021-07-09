import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Home',
      value: 'true',
      username: '',
    };
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <StatusBar barStyle="default" backgroundColor="#2196f3" />
        <View style={styles.header}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            {this.state.header}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.imgContainer}
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

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Switch
            value={this.state.value}
            onValueChange={() => this.setState({value: !this.state.value})}
          />
        </View>

        <TextInput
          value={this.state.username}
          style={{borderBottomWidth: 1, marginHorizontal: 8}}
          onChangeText={(value) => this.setState({username: value})}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnTxt}>Click</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnTxt}>Click</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnTxt}>Click</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnTxt}>Click</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 16,
    margin: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  header: {
    backgroundColor: '#2196f3',
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
});

export default App;
