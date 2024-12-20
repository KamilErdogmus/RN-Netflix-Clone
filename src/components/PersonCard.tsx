import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../styles/defaultScreenStyles';
import {themeColors} from '../styles/colors';
import {height, width} from '../utils/helpers';
import {IMAGE_BASE_URL} from '../service/url';
import {Routes} from '../utils/Routes';
import {useNavigation} from '@react-navigation/native';
import {TabParamList} from '../utils/types';

Routes.ARTISTDETAIL;
interface IProps {
  artistID: number;
  name: string;
  posterPath: string;
}

const PersonCard = ({artistID, name, posterPath}: IProps) => {
  const navigation = useNavigation<TabParamList>();
  return (
    <Pressable
      onPress={() => navigation.navigate(Routes.ARTISTDETAIL, {artistID})}
      style={styles.container}>
      <Image
        style={styles.img}
        source={{uri: `${IMAGE_BASE_URL}${posterPath}`}}
      />
      <Text style={styles.text}>
        {name}
        <Text style={styles.info}>&bull; Actor</Text>
      </Text>
    </Pressable>
  );
};

export default PersonCard;

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
  img: {
    width: width * 0.2,
    height: height * 0.09,
    borderRadius: height * 0.1,
    marginRight: 5,
  },
  text: {
    color: themeColors.WHITE,
    fontSize: 18,
    fontWeight: '700',
    alignItems: 'center',
    flex: 1,
  },
  info: {fontSize: 12, color: themeColors.GRAY},
});
