import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const ChatScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fd1',
  },
});
