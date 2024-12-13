import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ImageSourcePropType} from 'react-native';

export type RootStackParamList = {
  WELCOME: undefined;
  SIGNIN: undefined;
  MOVIELIST: undefined;
  ADDNEWLIST: undefined;
};

export type TabParamList = {
  HOME: undefined;
  NEWHOT: undefined;
  SEARCH: undefined;
  DOWNLOADS: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type MovieListScreenNavigationProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MOVIELIST'>;
};

export interface MovieListScreenProps {
  navigation: MovieListScreenNavigationProp;
}

export interface User {
  id: number | string;
  title: string | null;
  image: ImageSourcePropType | null;
}

export interface UsersState {
  userList: User[];
}
export interface CurrentUserState {
  user: User | null;
}

export interface IBtnProps {
  status: string;
  title: string;
  fnc: () => void;
}
