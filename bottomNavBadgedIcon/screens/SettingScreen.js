import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fd1',
  },
});
