import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MovieCard = () => {
  return (
    <View>
      <Text style={styles.text}>MovieCard</Text>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({text: {color: 'white'}});
