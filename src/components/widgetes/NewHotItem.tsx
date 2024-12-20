import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PosterImg from '../PosterImg';
import {Add, InfoCircle, PlayCircle} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {TabParamList} from '../../utils/types';
import {themeColors} from '../../styles/colors';
import Overview from '../Overview';
import {useDispatch, useSelector} from 'react-redux';
import {addList} from '../../store/slices/currentSlice';
import {RootState} from '../../store/store';
import {Toast} from 'toastify-react-native';

const NewHotItem = ({item}: {item: any}) => {
  const navigation = useNavigation<TabParamList>();
  const dispatch = useDispatch();
  const {myList} = useSelector((state: RootState) => state.currentUser);

  const handleNavigate = () => {
    navigation.navigate('MOVIEDETAIL', {movieID: item?.id});
  };

  const handleAddList = () => {
    if (item) {
      const newItem = {
        movieID: item.id,
        poster_path: item.poster_path,
        movieTitle: item.title,
      };

      const isAlreadyInList = myList.some(
        listItem => listItem.movieID === item.id,
      );

      if (!isAlreadyInList) {
        dispatch(addList(newItem));
        Toast.success('Movie added to list:', 'bottom');
      } else {
        Toast.info('Movie already in list', 'bottom');
      }
    }
  };

  const isInList = myList.some(listItem => listItem.movieID === item?.id);
  return (
    <View>
      <Pressable onPress={handleNavigate}>
        <PosterImg posterPath={item?.poster_path} />
      </Pressable>
      <Text style={styles.movieTitle}>{item?.title}</Text>
      <View style={styles.buttons}>
        <Pressable onPress={handleAddList} style={styles.btnContainer}>
          <Text style={styles.btnTitle}>
            {isInList ? 'Added to List' : 'My List'}
          </Text>
          <Add color={themeColors.WHITE} size={20} />
        </Pressable>
        <Pressable style={[styles.btnContainer, styles.playBtn]}>
          <PlayCircle color={themeColors.BLACK} size={33} variant="Bold" />
          <Text style={styles.playBtnTitle}>Play</Text>
        </Pressable>
        <Pressable onPress={handleNavigate} style={styles.btnContainer}>
          <InfoCircle color={themeColors.WHITE} size={20} />
          <Text style={styles.btnTitle}>Info</Text>
        </Pressable>
      </View>
      <Overview overview={item?.overview} />
      <View style={styles.divider} />
    </View>
  );
};

export default NewHotItem;

const styles = StyleSheet.create({
  movieTitle: {
    fontSize: 16,
    color: themeColors.WHITE,
    textAlign: 'center',
    marginVertical: 18,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  btnContainer: {flex: 1, alignItems: 'center'},
  btnTitle: {color: themeColors.WHITE},
  playBtn: {
    backgroundColor: themeColors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBtnTitle: {color: themeColors.BLACK, fontWeight: 'bold'},
  divider: {
    width: '100%',
    height: 0.6,
    backgroundColor: themeColors.GRAY,
    marginVertical: 12,
  },
});
