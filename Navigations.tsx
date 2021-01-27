import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Details from './screens/JsonDetails';
import Post from './screens/Posts';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Posts"
          component = {Post}
        />
        <Stack.Screen
          name="Details"
          component = {Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation;