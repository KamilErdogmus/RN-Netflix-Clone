import {SafeAreaView, View, StyleSheet} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import MainHeader from '../../../components/MainHeader';

const HomeScreen = () => {
  const {user} = useSelector((state: RootState) => state.currentUser);
  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <MainHeader user={user} />
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({});
