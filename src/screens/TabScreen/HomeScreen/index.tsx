import {SafeAreaView, View, StyleSheet, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import MainHeader from '../../../components/MainHeader';
import Categories from '../../../widgets';
import Sections from '../../../widgets/Sections';
import {getTopRatedMovies} from '../../../store/actions/movieActions';

const HomeScreen = () => {
  const {user} = useSelector((state: RootState) => state.currentUser);
  const {topRatedMovies, error, loading} = useSelector(
    (state: RootState) => state.movies,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);

  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <MainHeader user={user} />
      <View>
        <Categories />
      </View>
      <Sections />
    </SafeAreaView>
  );
};

export default HomeScreen;
