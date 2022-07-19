/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   useColorScheme,
   View,
 } from 'react-native';
 import HeartIcon from '../../Icons/Heart'
 import HomeIcon from '../../Icons/Heart'
 export default function App( props){
   return (
    <View style={{flex:1, backgroundColor:"#fff"}} >
    <TouchableOpacity  onPress={()=>props.navigation.navigate('Login')}>
      <Text>login</Text>
      <HeartIcon/>
      <HomeIcon size={45} fill={"red"}/>
    </TouchableOpacity>
    </View>
   );
 };
 
 
 