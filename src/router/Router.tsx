/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {themeColors} from '../styles/colors';
import {Routes} from '../utils/Routes';
import {RootStackParamList} from '../utils/types';
import TabBarNavigation from './TabBarNavigation';
import MovieListScreen from '../screens/StackScreen/MovieListScreen';
import WelcomeScreen from '../screens/StackScreen/WelcomeScreen';
import AddNewList from '../screens/StackScreen/MovieListScreen/AddNewList';
import ArtistDetailScreen from '../screens/TabScreen/ArtistDetailScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {ArrowLeft, Home2} from 'iconsax-react-native';
import {TouchableOpacity} from 'react-native';
import MovieDetailScreen from '../screens/TabScreen/MovieDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  const {detailedMovieName, detailedArtistName} = useSelector(
    (state: RootState) => state.currentUser,
  );

  return (
    <Stack.Navigator
      initialRouteName={Routes.WELCOME}
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
      <Stack.Screen
        name={Routes.MOVIEDETAIL}
        component={MovieDetailScreen}
        options={({navigation}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: themeColors.BLACK,
          },
          headerTitleAlign: 'center',
          headerTintColor: themeColors.WHITE,
          headerTitle:
            detailedMovieName?.length > 30
              ? detailedMovieName?.slice(0, 30) + '...'
              : detailedMovieName,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
            flex: 1,
            alignItems: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft size={32} color={themeColors.WHITE} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.MAIN)}
              style={{
                marginRight: 8,
              }}>
              <Home2 color={themeColors.WHITE} size={28} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name={Routes.ARTISTDETAIL}
        component={ArtistDetailScreen}
        options={({navigation}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: themeColors.BLACK,
          },
          headerTitleAlign: 'center',
          headerTintColor: themeColors.WHITE,
          headerTitle:
            detailedArtistName?.length > 30
              ? detailedArtistName?.slice(0, 30) + '...'
              : detailedArtistName,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
            flex: 1,
            alignItems: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft size={32} color={themeColors.WHITE} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.MAIN)}
              style={{
                marginRight: 8,
              }}>
              <Home2 color={themeColors.WHITE} size={28} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default Router;
