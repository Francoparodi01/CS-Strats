import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MapList from '../components/screens/MapList';
import MapaDinamico from '../components/screens/MapaDinamico';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MapList">
        <Stack.Screen name="MapList" component={MapList} options={{ title: 'Map List' }} />
        <Stack.Screen name="MapaDinamico" component={MapaDinamico} options={{ title: 'Map Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
