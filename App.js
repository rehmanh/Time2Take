import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './Screens/Homescreen';
import Mainscreen from './Screens/Mainscreen';
import Form from './Screens/Form';
import { StyleSheet, Text, View } from 'react-native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Welcome!" component={Homescreen} />
        <Stack.Screen options={{headerShown:false}} name="Mainscreen" component={Mainscreen} />
        <Stack.Screen options={{headerShown:false}} name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
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
