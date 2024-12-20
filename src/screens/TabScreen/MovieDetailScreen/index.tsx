import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
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
    dispatch(detailedMovieName(movieDetail?.title as string));
    dispatch(getRecommendations(movieID));
  }, [dispatch, movieDetail?.title, movieID]);

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
          <PosterImg posterPath={movieDetail?.poster_path as string} />

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
            <Button title="Watch Trailer" status={'secondary'} fnc={() => {}} />
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
  container: {marginVertical: 10},
  btnContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
});
