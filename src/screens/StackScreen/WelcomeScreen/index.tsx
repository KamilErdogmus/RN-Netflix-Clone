/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {themeColors} from '../../../styles/colors';
import Button from '../../../components/ui/Button';
import {Routes} from '../../../utils/Routes';

const WelcomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 5}}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/welcomeImage.png')}
          style={styles.imageStyle}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Unlimited entertainment,one low price
          </Text>
          <Text style={styles.title2}>
            All of Netflix, starting at just $19.99
          </Text>
        </View>
      </View>
      <View style={styles.buttonArea}>
        <Button
          fnc={() => navigation.navigate(Routes.MOVIELIST)}
          status="primary"
          title="GET STARTED"
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  imageStyle: {width: '100%', height: '100%'},
  titleContainer: {
    position: 'absolute',
    width: '100%',
    height: '15%',
    justifyContent: 'space-between',
    padding: 5,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.88)',
  },
  title: {
    fontSize: 28,
    color: themeColors.WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 16,
    color: themeColors.WHITE,
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonArea: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: themeColors.BLACK,
  },
});
