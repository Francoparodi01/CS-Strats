// MapaDinamico.js
import React from 'react';
import { View, Text } from 'react-native';

const MapaDinamico = ({ route }) => {
  const { mapa } = route.params;

  return (
    <View>
      <Text>{mapa.nombre}</Text>
    </View>
  );
};

export default MapaDinamico;
