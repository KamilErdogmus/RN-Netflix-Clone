import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

import SectionItem from '../components/widgetes/SectionItem';
import {themeColors} from '../styles/colors';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

const Sections = () => {
  const {combinedSection} = useSelector(
    (state: RootState) => state.combinedSections,
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={combinedSection}
        renderItem={({item}) => <SectionItem data={item} />}
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
