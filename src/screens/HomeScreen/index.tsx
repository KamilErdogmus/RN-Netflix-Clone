import {Image, SafeAreaView, View, StyleSheet} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

import {SearchNormal1} from 'iconsax-react-native';
import {themeColors} from '../../styles/colors';

const HomeScreen = () => {
  const {user} = useSelector((state: RootState) => state.currentUser);
  console.log(user);
  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/n.png')}
        />
        <View style={styles.headerRight}>
          <SearchNormal1 size="20" color={themeColors.WHITE} />
          {user?.image && (
            <Image source={user.image} style={styles.userImage} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logo: {width: 40, height: 40},
  headerRight: {flexDirection: 'row'},
  text: {
    color: 'white',
  },
  userImage: {marginHorizontal: 12, width: 20, height: 20},
});
