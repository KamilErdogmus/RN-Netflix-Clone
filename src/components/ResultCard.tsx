import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {IMAGE_BASE_URL} from '../service/url';
import {height, width} from '../utils/helpers';
import {themeColors} from '../styles/colors';
import {PlayCircle, Trash} from 'iconsax-react-native';
import {removeList} from '../store/slices/currentSlice';
import {useNavigation} from '@react-navigation/native';
import {TabParamList} from '../utils/types';
import {useDispatch} from 'react-redux';
import {Toast} from 'toastify-react-native';

interface IProps {
  movieID: number;
  posterPath: string;
  title: string;
  nav?: boolean;
}

const ResultCard = ({movieID, posterPath, title, nav}: IProps) => {
  const navigation = useNavigation<TabParamList>();
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeList(movieID));
    Toast.info('Movie deleted from your list', 'center');
  };
  return (
    <Pressable
      onPress={() => navigation.navigate('MOVIEDETAIL', {movieID})}
      style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{uri: `${IMAGE_BASE_URL}${posterPath}`}}
        />
        <Text style={styles.text} numberOfLines={3}>
          {title}
          <Text style={styles.info}>&bull; Movie</Text>
        </Text>
      </View>
      {nav && (
        <View style={styles.btnContainer}>
          <TouchableOpacity>
            <PlayCircle size="28" color={themeColors.BLUE} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRemove}>
            <Trash size="28" color={themeColors.RED} />
          </TouchableOpacity>
        </View>
      )}
    </Pressable>
  );
};

export default ResultCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 0.5,
    height: height * 0.11,
    borderColor: themeColors.GRAY,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    borderRadius: 8,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    width: '85%',
  },
  img: {
    width: width * 0.2,
    height: height * 0.09,
    borderRadius: 8,
  },
  text: {
    color: themeColors.WHITE,
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
  },
  btnContainer: {
    borderLeftWidth: 1,
    paddingLeft: 8,
    borderColor: themeColors.GRAY,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  info: {fontSize: 12, color: themeColors.GRAY},
});
