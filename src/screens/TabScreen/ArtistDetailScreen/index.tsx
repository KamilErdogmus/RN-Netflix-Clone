import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';
import Loader from '../../../components/Loader';
import Error from '../../../components/Error';
import {TabParamList} from '../../../utils/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {getArtistDetail} from '../../../store/actions/movieActions';
import {detailedArtistName} from '../../../store/slices/currentSlice';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {height, width} from '../../../utils/helpers';
import {IMAGE_BASE_URL} from '../../../service/url';
import {themeColors} from '../../../styles/colors';
import Overview from '../../../components/Overview';
import MovieCredits from '../../../components/MovieCredits';

type MovieDetailScreenRouteProp = RouteProp<TabParamList, 'ARTISTDETAIL'>;

const ArtistDetailScreen = () => {
  const route = useRoute<MovieDetailScreenRouteProp>();
  const {artistID} = route.params;

  const dispatch = useDispatch();
  const {artistDetail, loading, error} = useSelector(
    (state: RootState) => state.artistDetail,
  );

  useEffect(() => {
    dispatch(getArtistDetail(artistID));
    dispatch(detailedArtistName(artistDetail?.name));
  }, [dispatch, artistDetail?.name, artistID]);

  const images = artistDetail?.images.profiles.slice(0, 6);

  return (
    <ScrollView style={defaultScreenStyle.container}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <View>
          <View>
            <SwiperFlatList
              index={0}
              showPagination
              paginationStyleItemActive={{backgroundColor: themeColors.RED}}
              data={images}
              renderItem={({item}) => (
                <Image
                  resizeMode="cover"
                  style={styles.img}
                  source={{uri: `${IMAGE_BASE_URL}${item?.file_path}`}}
                />
              )}
            />
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>Birth Day</Text>
              <Text style={styles.data}>{artistDetail?.birthday}</Text>
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>Death Day</Text>
              <Text style={styles.data}>
                {artistDetail?.deathday ? artistDetail?.deathday : 'Alive'}
              </Text>
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>Gender</Text>
              <Text style={styles.data}>
                {artistDetail?.gender === 1
                  ? 'Female'
                  : artistDetail?.gender === 2
                  ? 'Male'
                  : 'Unknown'}
              </Text>
            </View>
          </View>

          <Overview overview={artistDetail?.biography} />

          <MovieCredits data={artistDetail?.credits?.cast} />
        </View>
      )}
    </ScrollView>
  );
};

export default ArtistDetailScreen;

const styles = StyleSheet.create({
  img: {width: width * 0.95, height: height * 0.5, borderRadius: 12},
  child: {width, justifyContent: 'center'},
  mainContainer: {
    backgroundColor: themeColors.RED,
    borderRadius: 24,
    marginVertical: 15,
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {marginHorizontal: 16, gap: 4},
  title: {
    fontSize: width * 0.05,
    textAlign: 'center',
    color: 'white',
    textDecorationLine: 'underline',
  },
  data: {fontSize: width * 0.035, textAlign: 'center', color: 'white'},
  bio: {textAlign: 'justify'},
});
