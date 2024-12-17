import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {themeColors} from '../styles/colors';
import {Microphone2, SearchNormal1} from 'iconsax-react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <SearchNormal1 color={themeColors.WHITE} size={18} />
        <TextInput
          placeholder="Search games,show..."
          placeholderTextColor={themeColors.WHITE}
        />
      </View>
      <Microphone2 color={themeColors.WHITE} size={22} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    padding: 10,
    backgroundColor: themeColors.DARKGRAY,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {flexDirection: 'row', gap: 8, alignItems: 'center'},
});
