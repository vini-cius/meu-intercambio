import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import FixesBudget from '../pages/FixesBudget';
import DestinyHome from '../pages/DestinyHome';
import Quotes from '../pages/Quotes';

interface Params {
  destinyName: string;
}

const AppTabs: React.FC = () => {
  const { Navigator, Screen } = createBottomTabNavigator();

  const route = useRoute();
  const routeParams = route.params as Params;

  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 58
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginTop: 2
        },
        labelPosition: 'below-icon',
        activeBackgroundColor: '#bd93f9',
        activeTintColor: '#282a36',
        inactiveBackgroundColor: '#282a36',
        inactiveTintColor: '#666',
      }}
    >
      <Screen
        name="DestinyHome"
        component={DestinyHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="home-currency-usd" size={size} color={focused ? '#282a36' : color} />
          ),
        }}
      />

      <Screen
        name="Quotes"
        component={Quotes}
        options={{
          tabBarLabel: 'Cotações',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="request-quote" size={size} color={focused ? '#282a36' : color} />
          ),
        }}
      />

      <Screen
        name="FixesBudget"
        component={FixesBudget}
        options={{
          tabBarLabel: 'Gastos Fixos',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="cash-register" size={size} color={focused ? '#282a36' : color} />
          ),
        }}
      />
    </Navigator>
  )
}

export default AppTabs;