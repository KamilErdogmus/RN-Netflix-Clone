import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeColors} from '../../styles/colors';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import MovieCard from '../MovieCard';

const SectionItem = ({title}: {title: string}) => {
  const {topRatedMovies, error, loading} = useSelector(
    (state: RootState) => state.movies,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        keyExtractor={(item: any) => item.id.toString()}
        data={topRatedMovies}
        renderItem={({item}) => <MovieCard item={item} />}
      />
    </View>
  );
};

export default SectionItem;

const styles = StyleSheet.create({
  container: {marginVertical: 20},
  title: {color: themeColors.WHITE, fontSize: 22, fontWeight: '500'},
});
