import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';
import {ArrowLeft, Edit2} from 'iconsax-react-native';
import {themeColors} from '../../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import WatchListItem from '../../../components/WatchListItem';
import Button from '../../../components/ui/Button';
import {profileSettings} from '../../../constants/profileSettings';
import SettingCard from '../../../components/SettingCard';
import {Routes} from '../../../utils/Routes';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {userList} = useSelector((state: RootState) => state.users);
  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size="32" color={themeColors.WHITE} />
        </TouchableOpacity>
        <Text style={styles.text}>Profiles & More</Text>
      </View>

      <View style={styles.userContainer}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          horizontal
          data={userList}
          renderItem={({item}) => <WatchListItem item={item} size={50} />}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          fnc={() => {}}
          status="empty"
          title={
            <View style={styles.btnContainer}>
              <Edit2 size="24" color={themeColors.WHITE} variant="Outline" />
              <Text style={styles.btnText}>Manage Profiles</Text>
            </View>
          }
        />
      </View>
      <FlatList
        contentContainerStyle={styles.settingsListContainer}
        data={profileSettings}
        renderItem={({item}) => <SettingCard item={item} />}
      />
      <View style={styles.signOutContainer}>
        <Button
          fnc={() => navigation.navigate(Routes.WELCOME)}
          status="empty"
          title="Sign Out"
          fSize={26}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 8,
    marginBottom: 8,
  },
  text: {color: themeColors.WHITE, fontSize: 20, fontWeight: '500'},
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  btnText: {color: themeColors.WHITE, fontSize: 14, fontWeight: '500'},
  userContainer: {paddingHorizontal: 10},
  buttonWrapper: {
    marginVertical: 18,
    flex: 1,
    maxHeight: 60,
  },
  settingsListContainer: {
    paddingHorizontal: 10,
    gap: 14,
  },
  signOutContainer: {
    marginBottom: 20,
    flex: 1,
    maxHeight: 60,
  },
});
