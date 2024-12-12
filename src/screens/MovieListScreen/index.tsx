import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import WatchListItem from '../../components/WatchListItem';
import {Edit2} from 'iconsax-react-native';
import {themeColors} from '../../styles/colors';
import ListHeader from '../../components/ListHeader';
import AddNewList from './AddNewList';

const MovieListScreen = ({navigation}: {navigation: any}) => {
  const users = useSelector((state: RootState) => state.userList);

  return (
    <SafeAreaView style={[defaultScreenStyle.container, styles.container]}>
      <View style={styles.header}>
        <View style={styles.emptyView} />
        <Image
          resizeMode="cover"
          source={require('../../assets/images/netflix.png')}
          style={styles.headerImg}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(AddNewList)}
          activeOpacity={0.9}>
          <Edit2 size="24" color={themeColors.WHITE} variant="Outline" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        ListHeaderComponent={<ListHeader />}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <WatchListItem item={item} />}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
};

export default MovieListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emptyView: {
    width: 24,
  },
  headerImg: {width: 124, height: 32},
  flatList: {
    flex: 1,
    width: '100%',
  },
  listContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  columnWrapper: {
    justifyContent: 'flex-start',
    gap: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
