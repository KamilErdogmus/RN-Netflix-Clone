import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeColors} from '../styles/colors';
import MovieItem from './widgetes/MovieItem';

const MovieCredits = ({data}: {data: any}) => {
  return (
    <View>
      <Text style={styles.title}>Movies</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => <MovieItem movie={item} />}
      />
    </View>
  );
};

export default MovieCredits;

const styles = StyleSheet.create({
  title: {
    color: themeColors.RED,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
