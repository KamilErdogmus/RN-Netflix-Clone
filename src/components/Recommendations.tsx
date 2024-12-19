import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MovieCard from './MovieCard';
import {themeColors} from '../styles/colors';

const Recommendations = ({data}: {data: any}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Movies</Text>
      <FlatList
        horizontal
        data={data}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <MovieCard item={item} />}
      />
    </View>
  );
};

export default Recommendations;
const styles = StyleSheet.create({
  container: {marginVertical: 10},
  contentContainer: {margin: 10},
  title: {
    color: themeColors.RED,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
