import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {IMAGE_BASE_URL} from '../service/url';
import {height, width} from '../utils/helpers';

const PosterImg = ({posterPath}: {posterPath: string}) => {
  return (
    <View style={styles.posterImg}>
      <Image
        resizeMode="cover"
        style={styles.img}
        source={{uri: `${IMAGE_BASE_URL}/${posterPath}`}}
      />
    </View>
  );
};

export default PosterImg;

const styles = StyleSheet.create({
  posterImg: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  img: {width: width * 0.7, height: height * 0.45},
});
