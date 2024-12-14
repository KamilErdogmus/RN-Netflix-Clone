import {USER_IMAGES} from '../constants/images';

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * USER_IMAGES.length);
  return USER_IMAGES[randomIndex];
};

export const API_KEY = '81dcba790d7afcdbb3210d79fb5312bf';

export const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWRjYmE3OTBkN2FmY2RiYjMyMTBkNzlmYjUzMTJiZiIsIm5iZiI6MTcxNTYxOTAxNy45OTgwMDAxLCJzdWIiOiI2NjQyNDRjOWRmM2UwNjljN2Q0ZTQxMGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bOl8r7l7OdRgS8N75AhpH3UH2Ndb7sbiVGH0gFBgr1U';
