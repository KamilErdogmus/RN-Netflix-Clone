import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import ImageViewing from 'react-native-image-viewing';

type ArtistDetailScreenRouteProp = RouteProp<TabParamList, 'ARTISTDETAIL'>;

const ArtistDetailScreen = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const route = useRoute<ArtistDetailScreenRouteProp>();
  const {artistID} = route.params;

  const dispatch = useDispatch();
  const {artistDetail, loading, error} = useSelector(
    (state: RootState) => state.artistDetail,
  );

  useEffect(() => {
    dispatch(getArtistDetail(artistID));
  }, [dispatch, artistID]);

  useEffect(() => {
    if (artistDetail?.name) {
      dispatch(detailedArtistName(artistDetail.name));
    }
  }, [artistDetail?.name, dispatch]);

  const formattedImages =
    artistDetail?.images?.profiles?.slice(0, 6).map(item => ({
      uri: `${IMAGE_BASE_URL}${item.file_path}`,
    })) || [];

  return (
    <ScrollView style={defaultScreenStyle.container}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <View style={styles.container}>
          <View>
            <SwiperFlatList
              index={0}
              showPagination
              paginationStyleItemActive={{backgroundColor: themeColors.RED}}
              data={artistDetail?.images.profiles.slice(0, 6) || []}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedImageIndex(index);
                    setVisible(true);
                  }}>
                  <Image
                    resizeMode="cover"
                    style={styles.img}
                    source={{uri: `${IMAGE_BASE_URL}${item.file_path}`}}
                  />
                </TouchableOpacity>
              )}
            />
            <ImageViewing
              images={formattedImages}
              imageIndex={selectedImageIndex}
              visible={visible}
              onRequestClose={() => setVisible(false)}
              animationType="fade"
              presentationStyle="overFullScreen"
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
  container: {marginBottom: 30},
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
