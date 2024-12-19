import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Routes} from '../utils/Routes';
import HomeScreen from '../screens/TabScreen/HomeScreen';
import {themeColors} from '../styles/colors';
import TabBarIcon from '../components/ui/TabBarIcon';
import {NavigationProp, TabParamList} from '../utils/types';
import HotNew from '../screens/TabScreen/HotNewScreen';
import SearchScreen from '../screens/TabScreen/SearchScreen';
import DownloadsScreen from '../screens/TabScreen/DownloadsScreen';
import ProfileScreen from '../screens/TabScreen/ProfileScreen';
import MovieDetailScreen from '../screens/TabScreen/MovieDetailScreen';
import {TouchableOpacity} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {RootState} from '../store/store';
import {useSelector} from 'react-redux';
import ArtistDetailScreen from '../screens/TabScreen/ArtistDetailScreen';

const Tab = createBottomTabNavigator<TabParamList>();

type RouteProps = {
  route: {
    name: keyof TabParamList;
  };
};

const screenOptions = ({route}: RouteProps): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarStyle: {
    backgroundColor: themeColors.BLACK,
    display: route.name === Routes.PROFILE ? 'none' : 'flex',
    height: route.name === Routes.PROFILE ? 0 : 75,
  },
  tabBarActiveTintColor: themeColors.WHITE,
  tabBarInactiveTintColor: themeColors.GRAY,
  tabBarIcon: ({focused, size}) => (
    <TabBarIcon
      routeName={route.name}
      size={size}
      focused={focused}
      variant={focused ? 'Bold' : 'Linear'}
    />
  ),
});

const TabBarNavigation = () => {
  const navigation = useNavigation<NavigationProp>();

  const {detailedMovieName, detailedArtistName} = useSelector(
    (state: RootState) => state.currentUser,
  );

  const handleGoBack = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: Routes.MAIN,
        params: {
          screen: Routes.NEWHOT,
        },
      }),
    );
  };

  const titleCheck =
    detailedMovieName?.length > 30
      ? detailedMovieName?.slice(0, 30) + '...'
      : detailedMovieName;
  const nameCheck =
    detailedArtistName?.length > 30
      ? detailedArtistName?.slice(0, 30) + '...'
      : detailedArtistName;

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={Routes.HOME} component={HomeScreen} />
      <Tab.Screen name={Routes.NEWHOT} component={HotNew} />
      <Tab.Screen name={Routes.SEARCH} component={SearchScreen} />
      <Tab.Screen name={Routes.DOWNLOADS} component={DownloadsScreen} />
      <Tab.Screen
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: {display: 'none'},
        }}
        name={Routes.PROFILE}
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: {display: 'none'},
          headerShown: true,
          headerStyle: {
            backgroundColor: themeColors.BLACK,
          },
          headerTitleAlign: 'center',
          headerTintColor: themeColors.WHITE,
          headerTitle: titleCheck,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
            flex: 1,
            alignItems: 'center',
          },
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => (
            <TouchableOpacity onPress={handleGoBack}>
              <ArrowLeft size={32} color={themeColors.WHITE} />
            </TouchableOpacity>
          ),
        }}
        name={Routes.MOVIEDETAIL}
        component={MovieDetailScreen}
      />
      <Tab.Screen
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: {display: 'none'},
          headerShown: true,
          headerStyle: {
            backgroundColor: themeColors.BLACK,
          },
          headerTitleAlign: 'center',
          headerTintColor: themeColors.WHITE,
          headerTitle: nameCheck,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
            flex: 1,
            alignItems: 'center',
          },
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => (
            <TouchableOpacity onPress={handleGoBack}>
              <ArrowLeft size={32} color={themeColors.WHITE} />
            </TouchableOpacity>
          ),
        }}
        name={Routes.ARTISTDETAIL}
        component={ArtistDetailScreen}
      />
    </Tab.Navigator>
  );
};

export default TabBarNavigation;
