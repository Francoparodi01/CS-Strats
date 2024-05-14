import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import mapasData from "../../../data/mapas";

const MapList = () => {
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  const renderMapaItem = ({ item: mapa }) => (
    <TouchableOpacity onPress={() => navigation.navigate('MapaDinamico', { mapa })}>
      <View style={styles.mapaItem}>
        <Image source={mapa.img} style={styles.mapImage} />
        <Text style={styles.data}>{mapa.nombre}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
      <FlatList
        data={mapasData}
        renderItem={renderMapaItem}
        keyExtractor={mapa => mapa.id.toString()}
      />
  );
};

const styles = StyleSheet.create({
  mapaItem: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10, // Bordes redondeados
    flexDirection: 'column',
    margin: 10
  },
  mapImage: {
    height: 130, // Altura fija de la imagen
    width: 300,
    borderRadius: 10, // Bordes redondeados
  },
  data:{
    padding: 10,
    fontSize: 16, // Tamaño de fuente del nombre
    fontWeight: 'bold', // Estilo de fuente en negrita para el nombre
    color: 'white'
  }
});

export default MapList;
