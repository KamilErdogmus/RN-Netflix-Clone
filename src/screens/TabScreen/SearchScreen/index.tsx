import {
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  View,
  FlatList,
} from 'react-native';
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
import PersonCard from '../../../components/PersonCard';
import Loader from '../../../components/Loader';
import Error from '../../../components/Error';

const SearchScreen = () => {
  const {user} = useSelector((state: RootState) => state.currentUser);
  const {loading, error, results} = useSelector(
    (state: RootState) => state.searchQuery,
  );
  const navigation = useNavigation<TabParamList>();

  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <View style={styles.searchHeader}>
            {user?.image && (
              <Pressable onPress={() => navigation.navigate(Routes.PROFILE)}>
                <Image source={user.image} style={styles.userImage} />
              </Pressable>
            )}
          </View>

          <SearchBar />

          <FlatList
            data={results}
            contentContainerStyle={styles.flatlistContainer}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return item?.media_type === 'movie' ? (
                <ResultCard
                  movieID={item?.id}
                  posterPath={item?.poster_path}
                  title={item.title}
                />
              ) : item?.media_type === 'person' &&
                item?.profile_path !== null &&
                item?.name !== '' ? (
                <PersonCard
                  artistID={item?.id}
                  posterPath={item?.profile_path}
                  name={item?.name}
                />
              ) : null;
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  flatlistContainer: {gap: 10},
  searchHeader: {flexDirection: 'row-reverse'},
  text: {color: themeColors.WHITE},
  userImage: {marginHorizontal: 12, width: 24, height: 24},
});
