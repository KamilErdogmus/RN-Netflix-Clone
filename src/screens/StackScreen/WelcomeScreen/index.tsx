import {Image, Text, View, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {themeColors} from '../../../styles/colors';
import Button from '../../../components/ui/Button';
import {Routes} from '../../../utils/Routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../utils/types';

type WelcomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'WELCOME'>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const handleGetStarted = () => {
    navigation.navigate(Routes.MOVIELIST);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/images/welcomeImage.png')}
          style={styles.imageStyle}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Unlimited entertainment, one low price
          </Text>
          <Text style={styles.subtitle}>
            All of Netflix, starting at just $19.99
          </Text>
        </View>
      </View>
      <View style={styles.buttonArea}>
        <Button fnc={handleGetStarted} status="primary" title="GET STARTED" />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.BLACK,
  },
  imageContainer: {
    flex: 5,
    position: 'relative',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    position: 'absolute',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 12,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.88)',
  },
  title: {
    fontSize: 28,
    color: themeColors.WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: themeColors.WHITE,
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonArea: {
    maxHeight: 50,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
