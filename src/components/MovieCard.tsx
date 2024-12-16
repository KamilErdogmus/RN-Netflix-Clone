import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeColors} from '../styles/colors';
import {height} from '../utils/helpers';

interface MovieCardProps {
  item: {
    id: number;
    title: string;
    poster_path: string;
  };
}

const MovieCard = ({item}: MovieCardProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
        style={styles.image}
      />
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(MovieCard);

const styles = StyleSheet.create({
  container: {
    width: 120,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: height * 0.2,
    borderRadius: 8,
  },
  title: {
    color: themeColors.WHITE,
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
});
