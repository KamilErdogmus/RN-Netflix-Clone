import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeColors} from '../styles/colors';
import * as Progress from 'react-native-progress';

const Loader = () => {
  return (
    <View style={styles.container}>
      <Progress.Pie
        size={50}
        indeterminate={true}
        color={themeColors.RED}
        borderWidth={2}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
