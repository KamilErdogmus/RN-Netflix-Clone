import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface WatchListItemProps {
  item: {
    id: number;
    title: string;
    image: ImageSourcePropType;
  };
}

const WatchListItem: React.FC<WatchListItemProps> = ({item}) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
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
  img: {width: 85, height: 85},
  itemText: {
    color: 'white',
    fontSize: 16,
  },
});
