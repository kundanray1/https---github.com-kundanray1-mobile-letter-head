// Print HTML as a Document from React Native App for Android and iOS
// https://aboutreact.com/react-native-print-html/

// Import React
import React, {useState,useEffect} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image,
  PermissionsAndroid,

} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import HTML to PDF
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { TextInput } from 'react-native-paper';
// Import RNPrint
import RNPrint from 'react-native-print';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import header from './header.png';
import RootNavigator from './Navigations/RootNavigator';
const App = () => {

// const [image,setImage]= useState(require(filePath));


  // console.log('cached data',cacheToFetch)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#bdd5ff',padding:20}}>
<RootNavigator/>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginVertical: 10,
  },

  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },

  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});