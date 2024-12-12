import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {NavigationProp} from '../utils/types';
import {Routes} from '../utils/Routes';
import {useDispatch} from 'react-redux';
import {currentUser} from '../store/slices/currentSlice';

type WatchListItemProps = {
  item: {
    id: number | string;
    title: string;
    image: ImageSourcePropType;
  };
};

const WatchListItem = ({item}: WatchListItemProps) => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(currentUser(item));
    navigation.navigate(Routes.SIGNIN);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.itemContainer}>
      <Image style={styles.img} source={item.image} />
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default WatchListItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: 85,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  img: {
    width: 85,
    height: 85,
  },
  itemText: {
    color: 'white',
    fontSize: 16,
  },
});
