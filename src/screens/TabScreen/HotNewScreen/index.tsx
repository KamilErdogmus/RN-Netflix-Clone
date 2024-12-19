import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import Loader from '../../../components/Loader';
import Error from '../../../components/Error';
import NewHotItem from '../../../components/widgetes/NewHotItem';

const HotNew = () => {
  const {upcoming, error, loading} = useSelector(
    (state: RootState) => state.movies,
  );

  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <FlatList
          data={upcoming}
          renderItem={({item}) => <NewHotItem item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default HotNew;

const styles = StyleSheet.create({});
