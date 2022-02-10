
import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import LandingScreen from './LandingScreen';
import Form from './Form';

const Stack = createStackNavigator();

  
  const RootNavigator = () => {
    

  
    return (
    
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingScreen">
          {/* SplashScreen which will come once for 5 Seconds */}

          <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            // Hiding header for Splash Screen
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Form"
            component={Form}
            // Hiding header for Splash Screen
            options={{headerShown: false}}
          />
    
        </Stack.Navigator>
      </NavigationContainer>
     
    );
  };
  export default RootNavigator;
  