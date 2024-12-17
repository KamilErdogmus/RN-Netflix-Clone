import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Routes} from '../utils/Routes';
import HomeScreen from '../screens/TabScreen/HomeScreen';
import {themeColors} from '../styles/colors';
import TabBarIcon from '../components/ui/TabBarIcon';
import {TabParamList} from '../utils/types';
import HotNew from '../screens/TabScreen/HotNewScreen';
import SearchScreen from '../screens/TabScreen/SearchScreen';
import DownloadsScreen from '../screens/TabScreen/DownloadsScreen';
import ProfileScreen from '../screens/TabScreen/ProfileScreen';

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
    </Tab.Navigator>
  );
};

export default TabBarNavigation;
