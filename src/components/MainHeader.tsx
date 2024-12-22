import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SearchNormal1, TruckRemove} from 'iconsax-react-native';
import {themeColors} from '../styles/colors';
import {User, NavigationProp} from '../utils/types';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../utils/Routes';
import {useDispatch} from 'react-redux';
import {clearList} from '../store/slices/currentSlice';
import {Toast} from 'toastify-react-native';

const MainHeader = ({
  user,
  icon,
  clear,
}: {
  user: User | null;
  icon?: boolean;
  clear?: boolean;
}) => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearList());
    Toast.warn('Movie List Cleared');
  };

  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../assets/images/n.png')} />
      <View style={styles.headerRight}>
        {icon && (
          <TouchableOpacity onPress={() => navigation.navigate(Routes.SEARCH)}>
            <SearchNormal1 size="20" color={themeColors.WHITE} />
          </TouchableOpacity>
        )}
        {clear && (
          <TouchableOpacity onPress={handleClear}>
            <TruckRemove size="34" color={themeColors.WHITE} />
          </TouchableOpacity>
        )}
        {user?.image && (
          <Pressable onPress={() => navigation.navigate(Routes.PROFILE)}>
            <Image source={user.image} style={styles.userImage} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logo: {width: 40, height: 40},
  headerRight: {flexDirection: 'row', alignItems: 'center', gap: 10},
  text: {
    color: 'white',
  },
  userImage: {marginHorizontal: 12, width: 32, height: 32},
});
