import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {themeColors} from '../styles/colors';
import {Microphone2, SearchNormal1} from 'iconsax-react-native';
import {useDispatch} from 'react-redux';
import {useDebounce} from '../hooks/debounceFnc';
import {getSearchQuery} from '../store/actions/movieActions';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const debouncedQuery = useDebounce(searchQuery, 1000);
  const dispatch = useDispatch();

  useEffect(() => {
    if (debouncedQuery && debouncedQuery.trim().length > 3) {
      dispatch(getSearchQuery(debouncedQuery));
    }
  }, [debouncedQuery, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <SearchNormal1 color={themeColors.WHITE} size={18} />
        <TextInput
          placeholder="Search movies,actors..."
          style={styles.input}
          value={searchQuery}
          placeholderTextColor={themeColors.WHITE}
          onChangeText={text => setSearchQuery(text)}
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
  input: {
    color: themeColors.WHITE,
    padding: 8,
    fontSize: 16,
  },
  left: {flexDirection: 'row', gap: 8, alignItems: 'center'},
});
