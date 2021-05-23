
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

import AppTabs from './AppTabs';

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home}/>  
        <Screen name="Destiny" component={AppTabs}/>  
      </Navigator>
    </NavigationContainer>
  )
}
