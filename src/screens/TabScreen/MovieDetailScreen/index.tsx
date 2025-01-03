import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Linking,
  View,
  Text,
} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../../styles/defaultScreenStyles';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  getMovieDetail,
  getRecommendations,
} from '../../../store/actions/movieActions';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import Loader from '../../../components/Loader';
import Error from '../../../components/Error';
import PosterImg from '../../../components/PosterImg';
import {addList, detailedMovieName} from '../../../store/slices/currentSlice';
import Genres from '../../../components/Genres';
import Overview from '../../../components/Overview';
import {TabParamList} from '../../../utils/types';
import MovieDetailItem from '../../../components/MovieDetailItem';
import millify from 'millify';
import Button from '../../../components/ui/Button';
import Casts from '../../../components/Casts';
import Recommendations from '../../../components/Recommendations';
import {Toast} from 'toastify-react-native';
import {YOUTUBE_BASE_URL} from '../../../service/url';
import {themeColors} from '../../../styles/colors';

type MovieDetailScreenRouteProp = RouteProp<TabParamList, 'MOVIEDETAIL'>;

const MovieDetailScreen = () => {
  const route = useRoute<MovieDetailScreenRouteProp>();
  const {movieID} = route.params;

  const dispatch = useDispatch();
  const {movieDetail, loading, error} = useSelector(
    (state: RootState) => state.movieDetail,
  );
  const {recommendations} = useSelector(
    (state: RootState) => state.recommendations,
  );
  const {myList} = useSelector((state: RootState) => state.currentUser);
  useEffect(() => {
    dispatch(getMovieDetail(movieID));
    dispatch(getRecommendations(movieID));
  }, [dispatch, movieID]);

  useEffect(() => {
    if (movieDetail) {
      dispatch(detailedMovieName(movieDetail.title));
    }
  }, [dispatch, movieDetail]);

  const handleAddList = () => {
    if (movieDetail) {
      const newItem = {
        movieID: movieDetail.id,
        poster_path: movieDetail.poster_path,
        movieTitle: movieDetail.title,
      };

      const isAlreadyInList = myList.some(
        item => item.movieID === movieDetail.id,
      );

      if (!isAlreadyInList) {
        dispatch(addList(newItem));
        Toast.success('Movie added to list:', 'bottom');
      } else {
        Toast.info('Movie already in list', 'bottom');
      }
    }
  };
  const trailer = movieDetail?.videos?.results.find(
    item => item.type === 'Trailer',
  );

  const handleWatchTrailer = async () => {
    const videoKey = trailer?.key || movieDetail?.videos?.results[0].key;

    if (videoKey) {
      const url = `${YOUTUBE_BASE_URL}${videoKey}`;
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        Toast.info('Redirecting...', 'center');
        await Linking.openURL(url);
      } else {
        Toast.info('Cannot open YouTube', 'bottom');
      }
    } else {
      Toast.info('No trailer available', 'bottom');
    }
  };

  const rateColor =
    movieDetail?.vote_average >= 9
      ? themeColors.GREEN
      : movieDetail?.vote_average > 7.5
      ? themeColors.YELLOW
      : movieDetail?.vote_average >= 6
      ? themeColors.BLUE
      : themeColors.RED;

  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.imgContainer}>
            <PosterImg posterPath={movieDetail?.poster_path as string} />
            <View style={[styles.averageView, {backgroundColor: rateColor}]}>
              <Text style={styles.averageText}>
                {movieDetail?.vote_average.toFixed(1)}
              </Text>
            </View>
          </View>

          <Genres data={movieDetail?.genres} />

          <Overview overview={movieDetail?.overview} />

          <MovieDetailItem
            title1={'Release Date'}
            data1={movieDetail?.release_date.split('-')[0]}
            title2={'Runtime'}
            data2={`${movieDetail?.runtime} Min`}
          />
          <MovieDetailItem
            title1={'Budget'}
            data1={
              movieDetail?.budget > 0
                ? ` $${millify(movieDetail?.budget)}`
                : 'Unknown'
            }
            title2={'Revenue'}
            data2={
              movieDetail?.revenue > 0
                ? ` $${millify(movieDetail?.revenue)}`
                : 'Unknown'
            }
          />

          <View style={styles.btnContainer}>
            <Button title="Add List" status={'primary'} fnc={handleAddList} />
            <Button
              title="Watch Trailer"
              status={'secondary'}
              fnc={handleWatchTrailer}
            />
          </View>

          <Casts data={movieDetail?.credits?.cast} />

          <Recommendations data={recommendations} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  container: {marginVertical: 15},
  imgContainer: {position: 'relative'},
  averageView: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    padding: 8,
    borderRadius: 20,
  },
  averageText: {color: themeColors.WHITE, fontSize: 20},
  btnContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
});
