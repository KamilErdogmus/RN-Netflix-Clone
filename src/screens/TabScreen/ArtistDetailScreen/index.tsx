import {StyleSheet, Text, View} from 'react-native';
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

  const images = artistDetail?.images.profiles;
  return (
    <View style={defaultScreenStyle.container}>
      {loading ? <Loader /> : error ? <Error /> : ''}
    </View>
  );
};

export default ArtistDetailScreen;

const styles = StyleSheet.create({});
