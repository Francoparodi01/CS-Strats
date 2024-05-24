import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from "react-native";

const MapaDinamico = ({ route }) => {
  const { mapa } = route.params;

  // Debugging to check the received data
  console.log('Received mapa:', mapa);

  const renderSmokeItem = ({ item }) => (
    <View style={styles.smokeItem}>
      <Text style={styles.smokeTitle}>{item.title}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
        <Text style={styles.smokeUrl}>{item.url}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.mapName}>{mapa.nombre}</Text>
      
      <Text style={styles.sideTitle}>CT Side Smokes</Text>
      {mapa.lado && mapa.lado.ct && mapa.lado.ct.length > 0 ? (
        <FlatList
          data={mapa.lado.ct}
          renderItem={renderSmokeItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text style={styles.noDataText}>No CT smokes available.</Text>
      )}

      <Text style={styles.sideTitle}>TT Side Smokes</Text>
      {mapa.lado && mapa.lado.tt && mapa.lado.tt.length > 0 ? (
        <FlatList
          data={mapa.lado.tt}
          renderItem={renderSmokeItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text style={styles.noDataText}>No TT smokes available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10
  },
  mapName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20
  },
  sideTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10
  },
  smokeItem: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5
  },
  smokeTitle: {
    fontSize: 16,
    color: 'white'
  },
  smokeUrl: {
    fontSize: 14,
    color: '#1E90FF', // Change to a link color
    textDecorationLine: 'underline'
  },
  noDataText: {
    color: 'white',
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 5
  }
});

export default MapaDinamico;
