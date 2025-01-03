const BASE_URL = 'https://api.themoviedb.org/3/';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const UPCOMING_URL = 'discover/movie';
const NOW_PLAYING_URL = 'movie/now_playing';
const POPULAR_URL = 'movie/upcoming';
const TOP_RATED_MOVIE_URL = 'movie/top_rated';
const CATEGORIES_URL = 'genre/movie/list';
const YOUTUBE_BASE_URL = 'https://www.youtube.com/watch?v=';

const getMovieDetailURL = (movieID: string) =>
  `${BASE_URL}/movie/${movieID}?append_to_response=credits,videos,images`;

const getArtistDetailURL = (artistID: string) =>
  `${BASE_URL}/person/${artistID}?append_to_response=images,credits`;

const getRecommendationsURL = (movieID: string) =>
  `${BASE_URL}/movie/${movieID}/recommendations`;

const getSearchQueryURL = (query: string) =>
  `${BASE_URL}search/multi?query=${query}`;

export {
  BASE_URL,
  TOP_RATED_MOVIE_URL,
  NOW_PLAYING_URL,
  CATEGORIES_URL,
  IMAGE_BASE_URL,
  UPCOMING_URL,
  POPULAR_URL,
  YOUTUBE_BASE_URL,
  getMovieDetailURL,
  getArtistDetailURL,
  getRecommendationsURL,
  getSearchQueryURL,
};
