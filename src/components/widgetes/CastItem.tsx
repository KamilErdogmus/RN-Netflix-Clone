import {Image, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {CastMember, TabParamList} from '../../utils/types';
import {themeColors} from '../../styles/colors';
import {IMAGE_BASE_URL} from '../../service/url';
import {height, width} from '../../utils/helpers';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../utils/Routes';

const CastItem = ({cast}: {cast: CastMember}) => {
  const navigation = useNavigation<TabParamList>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(Routes.ARTISTDETAIL, {artistID: cast?.id})
      }
      style={styles.container}>
      <Image
        resizeMode="cover"
        source={{uri: `${IMAGE_BASE_URL}${cast.profile_path}`}}
        style={styles.img}
      />
      <Text numberOfLines={1} style={styles.name}>
        {cast?.name}
      </Text>
      <Text numberOfLines={1} style={styles.character}>
        {cast?.character}
      </Text>
    </Pressable>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {marginHorizontal: 10},
  img: {width: width * 0.3, height: height * 0.15, borderRadius: width * 0.2},
  name: {color: themeColors.WHITE, textAlign: 'center', maxWidth: width * 0.3},
  character: {
    color: themeColors.GRAY,
    textAlign: 'center',
    maxWidth: width * 0.3,
  },
});
