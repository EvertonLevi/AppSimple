

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/pages/HomeScreen'
import OndeEstou from './src/pages/OndeEstou'
import BuscarProdutos from './src/pages/BuscarProdutos'
import QuemSou from './src/pages/QuemSou'
import MeusProdutos from './src/pages/MeusProdutos'



const Tab = createBottomTabNavigator()

export default function App() {

  return (

    <NavigationContainer style={{ backgroundrrr: "red" }}>
      <Tab.Navigator style={{ backgroundColor: '#000' }}>
        {/* <Tab.Screen name="Home" component={SettingsScreen} />
        <Tab.Screen name="Onde Estou" component={HomeScreen} /> */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Onde Estou" component={OndeEstou} />
        <Tab.Screen name="Meus Produtos" component={MeusProdutos} />
        <Tab.Screen name="Buscar Produtos" component={BuscarProdutos} />
        <Tab.Screen name="Quem Sou" component={QuemSou} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#524',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#111',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: null,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

