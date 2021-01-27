import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Posts from './screens/Posts';

const stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Posts"
          component = {Posts}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;