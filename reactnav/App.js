import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button, StatusBar, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#009387" />
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Detail" component={DetailStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
