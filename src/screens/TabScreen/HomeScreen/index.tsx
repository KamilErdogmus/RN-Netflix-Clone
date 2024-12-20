import {SafeAreaView, View, StyleSheet, FlatList, Text} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import MainHeader from '../../../components/MainHeader';

import Sections from '../../../widgets/Sections';
import {
  getTopRatedMovies,
  getCategories,
  getUpcoming,
  getPopular,
  getNowPlaying,
} from '../../../store/actions/movieActions';
import {combinedSections} from '../../../store/slices/sectionsSlice';
import Categories from '../../../widgets/Categories';
import Loader from '../../../components/Loader';
import Error from '../../../components/Error';

const HomeScreen = () => {
  const {user} = useSelector((state: RootState) => state.currentUser);
  const {topRatedMovies, error, loading, nowPlaying, popular, upcoming} =
    useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMovies());
    dispatch(getCategories({}));
    dispatch(getUpcoming({}));
    dispatch(getPopular({}));
    dispatch(getNowPlaying({}));
  }, []);

  const createdSections = useMemo(() => {
    return [
      {
        id: '1',
        title: 'Releases In the Past Year',
        data: upcoming?.slice(0, 7) || [],
      },
      {
        id: '2',
        title: 'Continue Watching For',
        data: nowPlaying?.slice(8, 16) || [],
      },
      {
        id: '3',
        title: 'Selected For You Today',
        data: topRatedMovies?.slice(0, 7) || [],
      },
      {
        id: '4',
        title: 'New Releases',
        data: upcoming?.slice(13, 20) || [],
      },
      {
        id: '5',
        title: 'Popular Movies',
        data: popular?.slice(0, 7) || [],
      },
      {
        id: '6',
        title: 'Chilly Thriller',
        data: topRatedMovies?.slice(7, 13) || [],
      },
      {
        id: '7',
        title: 'Only on Netflix',
        data: popular?.slice(7, 13) || [],
      },
    ];
  }, [popular, topRatedMovies, upcoming, nowPlaying]);
  useEffect(() => {
    dispatch(combinedSections(createdSections));
  }, [createdSections]);

  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <View style={{flex: 1}}>
          <MainHeader user={user} icon />
          <View>
            <Categories />
          </View>
          <Sections />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
