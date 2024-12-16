import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SearchNormal1} from 'iconsax-react-native';
import {themeColors} from '../styles/colors';
import {User} from '../utils/types';

const MainHeader = ({user}: {user: User | null}) => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../assets/images/n.png')} />
      <View style={styles.headerRight}>
        <SearchNormal1 size="20" color={themeColors.WHITE} />
        {user?.image && <Image source={user.image} style={styles.userImage} />}
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
