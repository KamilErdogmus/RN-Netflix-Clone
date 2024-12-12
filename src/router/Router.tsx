import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import MovieListScreen from '../screens/MovieListScreen';
import AddNewList from '../screens/MovieListScreen/AddNewList';
import {themeColors} from '../styles/colors';
import {Routes} from '../utils/Routes';
import {RootStackParamList} from '../utils/types';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={Routes.HOMESCREEN} component={HomeScreen} />
      <Stack.Screen name={Routes.MOVIELIST} component={MovieListScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Add New User',
          headerTitleAlign: 'center',
          headerBackTitle: 'Return',
          headerTintColor: themeColors.WHITE,
          headerStyle: {backgroundColor: themeColors.BLACK},
        }}
        name={Routes.ADDNEWLIST}
        component={AddNewList}
      />
    </Stack.Navigator>
  );
};

export default Router;
