const BASE_URL = 'https://api.themoviedb.org/3/';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const UPCOMING_URL = 'discover/movie';
const NOW_PLAYING_URL = 'movie/now_playing';
const POPULAR_URL = 'movie/upcoming';
const TOP_RATED_MOVIE_URL = 'movie/top_rated';
const CATEGORIES_URL = 'genre/movie/list';

const getMovieDetailURL = (movieID: string) =>
  `${BASE_URL}/movie/${movieID}?append_to_response=credits,videos,images`;

const getArtistDetailURL = (artistID: string) =>
  `${BASE_URL}/person/${artistID}?append_to_response=images`;

export {
  BASE_URL,
  TOP_RATED_MOVIE_URL,
  NOW_PLAYING_URL,
  CATEGORIES_URL,
  IMAGE_BASE_URL,
  UPCOMING_URL,
  POPULAR_URL,
  getMovieDetailURL,
  getArtistDetailURL,
};
