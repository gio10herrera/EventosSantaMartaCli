/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';

import CompViewButtonEventos from './components/CompViewButtonEventos';
import CompFormEvento from './components/CompFormEvento';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CompListaEventos from './components/CompListaEventos';



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
          {
            headerStyle: {
              backgroundColor: "#264040"
            },
            headerTintColor: "#80b3b3",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25
            }
          }
        }
      >
        <Stack.Screen
          name = "Home"
          component={CompViewButtonEventos}
          
        >
        </Stack.Screen>
        <Stack.Screen
          name = "CrearEvento"
          component={CompFormEvento}
          options={
            {
              title: "Registrar Evento",
            }
          }
        >
        </Stack.Screen>
        <Stack.Screen
          name = "ListaEventos"
          component={CompListaEventos}
          options={
            {
              title: "Lista de Eventos",
            }
          }
        >
        </Stack.Screen>
      </Stack.Navigator>
      
    </NavigationContainer>
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

