import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeColors} from '../styles/colors';

const Overview = ({overview}: {overview: string | undefined}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.overview}>{overview}</Text>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  overview: {color: themeColors.GRAY, textAlign: 'justify', fontSize: 15},
});
