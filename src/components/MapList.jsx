import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import mapasData from "../../data/mapas";

const MapList = () => {

  const renderMapaItem = ({ item: mapa }) => (
    <TouchableOpacity onPress={() => navigation.navigate('MapaDinamico', { mapa })}>
      <View style={styles.mapaItem}>
        <Text>{mapa.nombre}</Text>
        <Image source={mapa.img} style={styles.mapImage} />
      </View>
    </TouchableOpacity>
  );

  const renderSeparator = () => (
    <View style={styles.separator} />
  );

  return (
    <FlatList
      data={mapasData}
      renderItem={renderMapaItem}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={mapa => mapa.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  mapaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  mapImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
});

export default MapList;
