import {StyleSheet, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import MainHeader from '../../../components/MainHeader';
import ResultCard from '../../../components/ResultCard';
import {themeColors} from '../../../styles/colors';

const MyListScreen = () => {
  const {user, myList} = useSelector((state: RootState) => state.currentUser);

  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <MainHeader user={user} clear={myList.length > 0 ? true : false} />
      {myList.length === 0 ? (
        <Text style={styles.emptyText}>Your list is empty</Text>
      ) : (
        <FlatList
          data={myList}
          contentContainerStyle={styles.flatlistContainer}
          keyExtractor={item => item.movieID.toString()}
          renderItem={({item}) => (
            <ResultCard
              movieID={item?.movieID}
              posterPath={item.poster_path}
              title={item.movieTitle}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default MyListScreen;

const styles = StyleSheet.create({
  flatlistContainer: {gap: 12, paddingBottom: 30, marginTop: 10},
  emptyText: {
    color: themeColors.WHITE,
    fontSize: 22,
    textAlign: 'center',
    marginTop: 40,
  },
});
