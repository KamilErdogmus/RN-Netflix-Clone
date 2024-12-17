import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IMAGE_BASE_URL} from '../service/url';
import {height, width} from '../utils/helpers';
import {themeColors} from '../styles/colors';
import {PlayCircle} from 'iconsax-react-native';

const ResultCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{uri: `${IMAGE_BASE_URL}/aosm8NMQ3UyoBVpSxyimorCQykC.jpg`}}
        />
        <Text style={styles.text} numberOfLines={3}>
          Movie Name ovie Name ovie Name ovie Name ovie Name ovie Name ovie Name
          ovie Name ovie Name
        </Text>
      </View>
      <TouchableOpacity>
        <PlayCircle size="32" color={themeColors.WHITE} />
      </TouchableOpacity>
    </View>
  );
};

export default ResultCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    width: '85%', // Sabit genişlik
  },
  img: {
    width: width * 0.3,
    height: height * 0.15,
    borderRadius: 8,
  },
  text: {
    color: themeColors.WHITE,
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
  },
});
