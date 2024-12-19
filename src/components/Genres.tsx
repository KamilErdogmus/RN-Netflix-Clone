import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeColors} from '../styles/colors';

interface Genre {
  id: number;
  name: string;
}

interface GenresProps {
  data?: Genre[];
}

const Genres = ({data}: GenresProps) => {
  if (!data || data.length === 0) return null;

  return (
    <FlatList
      contentContainerStyle={styles.genreContainer}
      horizontal
      keyExtractor={item => item.id.toString()}
      data={data}
      renderItem={({item}) => (
        <View style={styles.genreBox}>
          <Text style={styles.genreTitle}>{item.name}</Text>
        </View>
      )}
    />
  );
};

export default Genres;

const styles = StyleSheet.create({
  genreContainer: {
    gap: 12,
    marginTop: 12,
    paddingHorizontal: 10,
  },
  genreBox: {
    padding: 8,
    borderWidth: 1,
    borderColor: themeColors.GRAY,
    borderRadius: 8,
  },
  genreTitle: {
    color: themeColors.RED,
    fontSize: 19,
    fontWeight: '600',
  },
});
