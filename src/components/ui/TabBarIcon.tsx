import {Add, Home2, SearchNormal1, VideoPlay} from 'iconsax-react-native';
import {themeColors} from '../../styles/colors';
import {Routes} from '../../utils/Routes';
import React from 'react';

type TabBarIconProps = {
  routeName: string;
  size: number;
  focused: boolean;
  variant: 'Bold' | 'Linear';
};

const TabBarIcon = ({routeName, size, focused, variant}: TabBarIconProps) => {
  const iconColor = focused ? themeColors.WHITE : themeColors.GRAY;

  switch (routeName) {
    case Routes.HOME:
      return <Home2 color={iconColor} size={size} variant={variant} />;
    case Routes.NEWHOT:
      return <VideoPlay color={iconColor} size={size} variant={variant} />;
    case Routes.SEARCH:
      return <SearchNormal1 color={iconColor} size={size} variant={variant} />;
    case Routes.MYLIST:
      return <Add color={iconColor} size={size} variant={variant} />;
    default:
      return <Home2 color={iconColor} size={size} variant={variant} />;
  }
};

export default TabBarIcon;
