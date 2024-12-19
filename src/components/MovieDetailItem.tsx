import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeColors} from '../styles/colors';

interface Iprops {
  title1: string;
  title2: string;
  data1: string | undefined;
  data2: string | undefined;
}

const MovieDetailItem = ({title1, title2, data1, data2}: Iprops) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title1}:</Text>
        <Text style={styles.data}> {data1}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title2}:</Text>
        <Text style={styles.data}> {data2}</Text>
      </View>
    </View>
  );
};

export default MovieDetailItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: themeColors.WHITE,
    padding: 8,
    borderRadius: 12,
    shadowColor: themeColors.RED,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 1,
    marginHorizontal: 12,
  },
  title: {color: themeColors.WHITE, fontSize: 16},
  data: {color: themeColors.WHITE, fontSize: 18},
});
