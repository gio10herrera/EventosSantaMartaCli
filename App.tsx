/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CompViewButtonEventos from './components/CompViewButtonEventos';
import CompFormEvento from './components/CompFormEvento';





function App() {
  return (
    <View style = {styles.container}>
      <CompFormEvento></CompFormEvento>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#568f8f",
    alignItems: "stretch",
    justifyContent: "center"
  }
});

export default App;
