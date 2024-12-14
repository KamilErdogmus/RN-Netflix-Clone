import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {themeColors} from '../styles/colors';
import {Routes} from '../utils/Routes';
import {RootStackParamList} from '../utils/types';
import TabBarNavigation from './TabBarNavigation';
import MovieListScreen from '../screens/StackScreen/MovieListScreen';
import WelcomeScreen from '../screens/StackScreen/WelcomeScreen';
import AddNewList from '../screens/StackScreen/MovieListScreen/AddNewList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.MAIN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={Routes.MAIN} component={TabBarNavigation} />
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
