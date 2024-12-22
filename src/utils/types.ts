import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ReactNode} from 'react';
import {ImageSourcePropType} from 'react-native';

export type RootStackParamList = {
  WELCOME: undefined;
  SIGNIN: undefined;
  MOVIELIST: undefined;
  ADDNEWLIST: undefined;
  MAIN: {
    screen?: keyof TabParamList;
  };
};

export type TabParamList = {
  HOME: undefined;
  NEWHOT: undefined;
  SEARCH: undefined;
  MYLIST: undefined;
  PROFILE: undefined;
  MOVIEDETAIL: {movieID: string};
  ARTISTDETAIL: {artistID: string};
};

export type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

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

export interface ListItem {
  movieID: number;
  poster_path: string;
  movieTitle: string;
}
export interface CurrentUserState {
  user: User | null;
  detailedMovieName: string;
  detailedArtistName: string;
  myList: ListItem[];
}

export interface IBtnProps {
  status: string;
  title: string | Element | ReactNode;
  fnc: () => void;
  fSize?: number;
}

export interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  budget: number | undefined;
  revenue: number;
  credits?: {
    cast: Array<{
      id: number;
      name: string;
      character: string;
      profile_path: string | null;
    }>;
  };
  genres: {id: number; name: string};
  videos?: {
    results: Array<{
      id: string;
      key: string;
      name: string;
      type: string;
    }>;
  };
}

export interface ArtistDetail {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

export interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
export interface CastProps {
  data?: CastMember[];
}
