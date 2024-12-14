import {SafeAreaView, View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import MainHeader from '../../../components/MainHeader';
import {getTopRatedMovies} from '../../../store/actions/movieActions';

const HomeScreen = () => {
  const {user} = useSelector((state: RootState) => state.currentUser);
  const topRatedMovies = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();
  console.log('object', topRatedMovies, '1');
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);

  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <MainHeader user={user} />
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({});
