import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking, Alert } from "react-native";
import mapas from "../../../data/mapas"; // Importación de los datos de los mapas

const MapaDinamico = ({ route }) => {
  const { mapa } = route.params; // Se extrae el objeto 'mapa' de los parámetros de la ruta

  // Función para abrir una URL
  const openURL = async (url) => {
    try {
      // Se verifica si la URL puede abrirse
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        // Se abre la URL si es compatible
        await Linking.openURL(url);
      } else {
        // Se muestra una alerta si la URL no es compatible
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    } catch (error) {
      // Se manejan los errores que puedan ocurrir durante el proceso
      console.error('An error occurred', error);
    }
  };

  // Función para renderizar cada elemento de humo (smoke)
  const renderSmokeItem = ({ item }) => (
    <View style={styles.smokeItem}>
      {/* Se muestra el título del humo */}
      <Text style={styles.smokeTitle}>{item.title}</Text>
      {/* Al presionar en el URL, se llama a la función openURL con la URL como parámetro */}
      <TouchableOpacity onPress={() => openURL(item.url)}>
        <Text style={styles.smokeUrl}>{item.url}</Text>
      </TouchableOpacity>
    </View>
  );

  // Devolución del componente de la pantalla del mapa dinámico
  return (
    <View style={styles.container}>
      {/* Se muestra el nombre del mapa */}
      <Text style={styles.mapName}>{mapa.nombre}</Text>

      {/* Se muestran los humos del lado CT si existen */}
      <Text style={styles.sideTitle}>CT Side Smokes</Text>
      {/* Se renderiza la lista de humos del lado CT si existen */}
      {mapa.lado && mapa.lado.ct && mapa.lado.ct.length > 0 && (
        <FlatList
          data={mapa.lado.ct}
          renderItem={renderSmokeItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
      {/* Se muestra un mensaje si no hay humos del lado CT */}
      {!mapa.lado || !mapa.lado.ct || mapa.lado.ct.length === 0 && (
        <Text style={styles.noDataText}>No CT smokes available.</Text>
      )}

      {/* Se muestran los humos del lado TT si existen */}
      <Text style={styles.sideTitle}>TT Side Smokes</Text>
      {/* Se renderiza la lista de humos del lado TT si existen */}
      {mapa.lado && mapa.lado.tt && mapa.lado.tt.length > 0 && (
        <FlatList
          data={mapa.lado.tt}
          renderItem={renderSmokeItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
      {/* Se muestra un mensaje si no hay humos del lado TT */}
      {!mapa.lado || !mapa.lado.tt || mapa.lado.tt.length === 0 && (
        <Text style={styles.noDataText}>No TT smokes available.</Text>
      )}
    </View>
  );
};

// Estilos para el componente
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
    color: '#1E90FF',
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
