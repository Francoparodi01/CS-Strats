import React from "react";
import { View, Text } from 'react-native';
import Constants from "expo-constants"
import MapList from "./MapList.jsx";

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flewGrow: 1}}>
        <Text>CS2 Strats</Text>
        <MapList/>
    </View>
  )
}

export default Main
