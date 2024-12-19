import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CastProps} from '../utils/types';
import CastItem from './widgetes/CastItem';
import {themeColors} from '../styles/colors';

const Casts = ({data}: CastProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Casts</Text>
      <FlatList
        horizontal
        data={data}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CastItem cast={item} />}
      />
    </View>
  );
};

export default Casts;

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  contentContainer: {margin: 10},
  title: {
    color: themeColors.WHITE,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
