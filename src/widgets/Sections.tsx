import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {sectionTitles} from '../constants/titles';
import SectionItem from '../components/widgetes/SectionItem';
import {themeColors} from '../styles/colors';

const Sections = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={sectionTitles}
        renderItem={({item}) => <SectionItem title={item.title} />}
      />
    </View>
  );
};

export default Sections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {color: themeColors.WHITE},
});
