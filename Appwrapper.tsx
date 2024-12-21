import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setList} from './src/store/slices/currentSlice';
import Router from './src/router/Router';

const AppWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadList = async () => {
      try {
        const savedList = await AsyncStorage.getItem('myList');
        if (savedList) {
          dispatch(setList(JSON.parse(savedList)));
        }
      } catch (error) {
        console.error('Error loading list:', error);
      }
    };

    loadList();
  }, [dispatch]);

  return <Router />;
};

export default AppWrapper;
