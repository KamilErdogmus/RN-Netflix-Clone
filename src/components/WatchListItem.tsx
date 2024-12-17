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
  size?: number;
};

const WatchListItem = ({item, size = 85}: WatchListItemProps) => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(currentUser(item));
    navigation.replace(Routes.MAIN);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.itemContainer, {width: size}]}>
      <Image
        style={[styles.img, {width: size, height: size}]}
        source={item.image}
      />
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default WatchListItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 16,
  },
});
