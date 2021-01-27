import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './Navigation';
import store from './redux/store';

export default function App() {
  return (
    <Provider store = {store} style={styles.container}>
     <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
