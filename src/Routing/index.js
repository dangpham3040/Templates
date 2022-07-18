import React, { useState, useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator, Image } from 'react-native';
import { LogBox } from 'react-native';
//screen
import Home from '../Screen/Home'
import Login from '../Screen/Login'
//main tab
import Main from './maintab'
export default function App() {
    const Stack = createNativeStackNavigator();
    const [isLoading, setisLoading] = useState(true)
    return (
        <NavigationContainer>

            {LogBox.ignoreAllLogs()}
            <Stack.Navigator>
                <>
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                </>
            </Stack.Navigator>
        </NavigationContainer>
    );
};