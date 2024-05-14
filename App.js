import { StyleSheet, View, Text } from 'react-native';
import Constants from "expo-constants"
import MapList from './src/components/MapList.jsx';

export default function App() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flewGrow: 1}}>
      <Text>CS2 STRATS</Text>
      <MapList/>
    </View>
  )
}