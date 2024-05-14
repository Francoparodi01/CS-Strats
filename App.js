import { StyleSheet, View, Text } from 'react-native';
import Constants from "expo-constants"
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1, backgroundColor: "red" }}>
      <Navigation/>
    </View>
  )
}
