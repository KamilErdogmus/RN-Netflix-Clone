import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, width} from '../../utils/helpers';
import {themeColors} from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import {TabParamList} from '../../utils/types';
import {Routes} from '../../utils/Routes';
import {IMAGE_BASE_URL} from '../../service/url';

const MovieItem = ({movie}: {movie: any}) => {
  const navigation = useNavigation<TabParamList>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(Routes.MOVIEDETAIL, {movieID: movie?.id})
      }
      style={styles.container}>
      <Image
        resizeMode="contain"
        source={{uri: `${IMAGE_BASE_URL}${movie.poster_path}`}}
        style={styles.img}
      />
      <Text numberOfLines={1} style={styles.name}>
        {movie?.title}
      </Text>
      <Text numberOfLines={1} style={styles.character}>
        {movie?.character}
      </Text>
    </Pressable>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {margin: 10},
  img: {width: width * 0.4, height: height * 0.2, borderRadius: 8},
  name: {
    color: themeColors.WHITE,
    textAlign: 'center',
    maxWidth: width * 0.4,
    fontSize: 16,
  },
  character: {
    color: themeColors.GRAY,
    textAlign: 'center',
    maxWidth: width * 0.4,
  },
});
