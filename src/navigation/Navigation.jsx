import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MapList from '../components/screens/MapList';
import MapaDinamico from '../components/screens/MapaDinamico';
<<<<<<< HEAD
=======
import { Text } from 'react-native';
>>>>>>> 45d034c1ac58ea47de495e1f47e38de1cf5f88fd

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="MapList">
        <Stack.Screen name="MapList" component={MapList} options={{ title: 'Map List' }} />
        <Stack.Screen name="MapaDinamico" component={MapaDinamico} options={{ title: 'Map Details' }} />
=======
      <Stack.Navigator>
        <Stack.Screen name="CS2 STRATS" component={MapList} />
        <Stack.Screen name="MapaDinamico" component={MapaDinamico} />
>>>>>>> 45d034c1ac58ea47de495e1f47e38de1cf5f88fd
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
