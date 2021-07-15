import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Nametype from './src/nametype';
import List from './src/list';

const Stack=createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Nametype" component={Nametype} options={{title: 'Main Screen', headerStyle:{backgroundColor: 'cyan'}}}/>
        <Stack.Screen name="List" component={List} options={{headerStyle: {backgroundColor: 'cyan'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  export default App;