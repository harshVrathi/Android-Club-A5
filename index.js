import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import Storeconfig from './src/store';

const store = Storeconfig();

const reduxtest=() =>
  <Provider store={store}>
    <App />
  </Provider>

AppRegistry.registerComponent(appName, ()=> reduxtest);