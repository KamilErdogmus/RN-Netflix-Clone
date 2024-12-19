import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {IMAGE_BASE_URL} from '../../../service/url';
import {themeColors} from '../../../styles/colors';
import {Add, InfoCircle, Play, PlayCircle} from 'iconsax-react-native';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList, TabParamList} from '../../../utils/types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PosterImg from '../../../components/PosterImg';

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

const HotNew = () => {
  const {upcoming, error, loading} = useSelector(
    (state: RootState) => state.movies,
  );
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <PosterImg posterPath={'5HJqjCTcaE1TFwnNh3Dn21be2es.jpg'} />
      <Text style={styles.movieTitle}>Movie Name</Text>
      <View style={styles.buttons}>
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnTitle}>My List</Text>
          <Add color={themeColors.WHITE} size={20} />
        </Pressable>
        <Pressable style={[styles.btnContainer, styles.playBtn]}>
          <PlayCircle color={themeColors.BLACK} size={33} variant="Bold" />
          <Text style={styles.playBtnTitle}>Play</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('MOVIEDETAIL', {movieID: '3'})}
          style={styles.btnContainer}>
          <InfoCircle color={themeColors.WHITE} size={20} />
          <Text style={styles.btnTitle}>Info</Text>
        </Pressable>
      </View>

      <Text style={styles.overview}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nobis
        magni expedita veritatis adipisci enim, vero repudiandae natus harum
        tempora voluptatibus fuga. Eveniet temporibus ad itaque molestias
        voluptatem veniam animi at voluptatum! Commodi cupiditate explicabo
        accusantium error unde, dignissimos perferendis. Id nam a in, deserunt,
        assumenda veniam eveniet distinctio animi porro tempore perspiciatis.
        Vitae natus minima fugit temporibus nobis, incidunt quae nesciunt rerum
        reiciendis aliquam iusto porro cupiditate a cum dignissimos qui ullam
        pariatur nihil commodi sapiente quisquam velit? Voluptatibus enim aut
      </Text>
      <View style={styles.divider} />
    </SafeAreaView>
  );
};

export default HotNew;

const styles = StyleSheet.create({
  movieTitle: {
    fontSize: 16,
    color: themeColors.WHITE,
    textAlign: 'center',
    marginVertical: 18,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  btnContainer: {flex: 1, alignItems: 'center'},
  btnTitle: {color: themeColors.WHITE},
  playBtn: {
    backgroundColor: themeColors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBtnTitle: {color: themeColors.BLACK, fontWeight: 'bold'},
  overview: {color: themeColors.GRAY, textAlign: 'justify'},
  divider: {
    width: '100%',
    height: 0.6,
    backgroundColor: themeColors.GRAY,
    marginVertical: 12,
  },
});
