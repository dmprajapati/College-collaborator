import React, { Component } from 'react'
// importing all the screens

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Signup from './screens/Signup';
import SigninScreen from './screens/Login';
import TabScreen from './screens/Tab';


const Stack = createStackNavigator();

export default function Routing() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={SigninScreen} />
                <Stack.Screen name="register" component={Signup} />
                <Stack.Screen name="home" component={TabScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}