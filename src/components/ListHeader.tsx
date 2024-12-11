import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.text}>Who's Watching?</Text>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 38,
  },
  text: {
    marginTop: 2,
    color: 'white',
    fontSize: 22,
  },
});
