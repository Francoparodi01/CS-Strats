import { StyleSheet, View } from 'react-native';
import Constants from "expo-constants"
import Main from "./src/components/Main.jsx"

export default function App() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flewGrow: 1}}>
      <Main/>
    </View>
  )
}
