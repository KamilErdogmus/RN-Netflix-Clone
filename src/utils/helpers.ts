import {USER_IMAGES} from '../constants/images';

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * USER_IMAGES.length);
  return USER_IMAGES[randomIndex];
};

// const API_KEY =112

// const token =
