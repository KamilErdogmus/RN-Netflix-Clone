import {SafeAreaView, View, StyleSheet, FlatList, Text} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import MainHeader from '../../../components/MainHeader';
import {getTopRatedMovies} from '../../../store/actions/movieActions';

const HomeScreen = () => {
  const {user} = useSelector((state: RootState) => state.currentUser);
  const {topRatedMovies, error, loading} = useSelector(
    (state: RootState) => state.movies,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMovies({}));
  }, []);

  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <MainHeader user={user} />

      <FlatList
        data={topRatedMovies}
        renderItem={({item}) => <RenderItem item={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const RenderItem = ({item}) => {
  return (
    <View>
      <Text style={styles.text}>{item.original_title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({text: {color: 'white'}});
