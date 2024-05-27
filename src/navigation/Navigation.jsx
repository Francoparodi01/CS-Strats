import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MapList from '../components/screens/MapList';
import MapaDinamico from '../components/screens/MapaDinamico';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CS2 STRATS" component={MapList} />
        <Stack.Screen name="MapaDinamico" component={MapaDinamico} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
