import axios from 'axios';

const API_KEY = '35576958-fcdd23cb6f9ed7de7f6f808c6';
const API_URL = 'https://pixabay.com/api/?';

export const fetchImages = async (searchQuery, page = 1) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  });

  try {
    const response = await axios.get(API_URL + searchParams.toString());
    // console.log(response.data.hits);
    if (response.data.hits.length === 0) {
      throw new Error('Nothing found');
    }
    return response.data.hits;
  } catch (error) {
    alert(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    throw error;
  }
};
