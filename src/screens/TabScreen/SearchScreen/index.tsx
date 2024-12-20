import {StyleSheet, SafeAreaView, Pressable, Image, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';
import {themeColors} from '../../../styles/colors';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {useNavigation} from '@react-navigation/native';
import {TabParamList} from '../../../utils/types';
import SearchBar from '../../../components/SearchBar';
import ResultCard from '../../../components/ResultCard';
import {Routes} from '../../../utils/Routes';

const SearchScreen = () => {
  const {user} = useSelector((state: RootState) => state.currentUser);
  const navigation = useNavigation<TabParamList>();

  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <View style={styles.searchHeader}>
        {user?.image && (
          <Pressable onPress={() => navigation.navigate(Routes.PROFILE)}>
            <Image source={user.image} style={styles.userImage} />
          </Pressable>
        )}
      </View>

      <SearchBar />

      <ResultCard />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchHeader: {flexDirection: 'row-reverse'},
  text: {color: themeColors.WHITE},
  userImage: {marginHorizontal: 12, width: 24, height: 24},
});
