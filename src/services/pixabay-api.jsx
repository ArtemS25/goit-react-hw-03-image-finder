import axios from 'axios';

export const fetchGalleryImages = async (nextStatePage, nextName) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: '32967286-aab6e01c55fd3080d6cca3650',
    q: `${nextName}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: `${nextStatePage}`,
    per_page: '200',
  };

  const resolve = await axios(BASE_URL, { params });

  return resolve.data;
};
