import React from 'react';
import {
  Notification,
  TextalignJustifycenter,
  Setting2,
  Profile,
  MessageQuestion,
} from 'iconsax-react-native';
import {themeColors} from '../styles/colors';

export const profileSettings = [
  {
    id: 11,
    icon: <Notification size="24" color={themeColors.WHITE} />,
    title: 'Notifications',
  },
  {
    id: 12,
    icon: <TextalignJustifycenter size="24" color={themeColors.WHITE} />,
    title: 'My List',
  },
  {
    id: 13,
    icon: <Setting2 size="24" color={themeColors.WHITE} />,
    title: 'App Settings',
  },
  {
    id: 14,
    icon: <Profile size="24" color={themeColors.WHITE} />,
    title: 'Account',
  },
  {
    id: 15,
    icon: <MessageQuestion size="24" color={themeColors.WHITE} />,
    title: 'Help',
  },
];
