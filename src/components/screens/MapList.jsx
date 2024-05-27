import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Importación del hook useNavigation para la navegación
import mapasData from "../../../data/mapas"; // Importación de los datos de los mapas

const MapList = () => {
  const navigation = useNavigation(); // Obtención del objeto de navegación mediante useNavigation

  // Función para renderizar cada elemento de mapa en la lista
  const renderMapaItem = ({ item: mapa }) => (
    <TouchableOpacity onPress={() => {
      // Línea de depuración para verificar los datos del mapa antes de la navegación
      console.log('Navigating to MapaDinamico with:', mapa); 

      // Navegación a la pantalla MapaDinamico con el mapa seleccionado como parámetro
      navigation.navigate('MapaDinamico', { mapa }); 
    }}>
      <View style={styles.mapaItem}>
        {/* Visualización de la imagen del mapa */}
        <Image source={mapa.img} style={styles.mapImage} /> 

        {/* Visualización del nombre del mapa */}
        <Text style={styles.data}>{mapa.nombre}</Text> 
      </View>
    </TouchableOpacity>
  );

  // Devolución del componente FlatList que renderiza la lista de mapas
  return (
    <FlatList
      data={mapasData} // Datos proporcionados para la FlatList
      renderItem={renderMapaItem} // Función para renderizar cada elemento
      keyExtractor={mapa => mapa.id.toString()} // Clave única para cada elemento
    />
  );
};


const styles = StyleSheet.create({
  mapaItem: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    flexDirection: 'column',
    margin: 10
  },
  mapImage: {
    height: 130,
    width: 300,
    borderRadius: 10,
  },
  data:{
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default MapList;
