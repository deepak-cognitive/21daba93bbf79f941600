import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Details from './screens/JsonDetails';
import Post from './screens/posts';

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
          name="JSON Details"
          component = {Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation;