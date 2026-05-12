import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39342201-f813eddd1adb93dcbf05db88a';

export const getImagesByQuery = query => {
  const axiosOptions = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  return axios.get(BASE_URL, axiosOptions).then(response => response.data);
};
