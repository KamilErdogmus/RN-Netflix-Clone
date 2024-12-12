import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNEWLIST, MOVIELIST, SIGNIN, WELCOME} from '../utils/Routes';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import MovieListScreen from '../screens/MovieListScreen';
import AddNewList from '../screens/MovieListScreen/AddNewList';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={SIGNIN} component={SignInScreen} />
      <Stack.Screen name={MOVIELIST} component={MovieListScreen} />
      <Stack.Screen name={ADDNEWLIST} component={AddNewList} />
    </Stack.Navigator>
  );
};

export default Router;
