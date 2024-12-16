import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeColors} from '../../styles/colors';

import MovieCard from '../MovieCard';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface SectionItemProps {
  data: {
    id: string;
    title: string;
    data: Movie[];
  };
}

const SectionItem = ({data}: SectionItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        keyExtractor={item => item.id.toString()}
        data={data.data}
        renderItem={({item}) => <MovieCard item={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default SectionItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    color: themeColors.WHITE,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
});
