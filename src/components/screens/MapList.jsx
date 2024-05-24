import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import mapasData from "../../../data/mapas";

const MapList = () => {
  const navigation = useNavigation(); 

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
