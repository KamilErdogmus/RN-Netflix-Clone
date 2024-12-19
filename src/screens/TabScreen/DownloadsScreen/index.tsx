import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';

const MyListScreen = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <Text>MyListScreen</Text>
    </SafeAreaView>
  );
};

export default MyListScreen;

const styles = StyleSheet.create({});
