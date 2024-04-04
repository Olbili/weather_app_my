import axios from 'axios';

// const API_KEY = '1455a1a4f4fd48da9542fefc2fad7cfa';
const API_KEY = 'bde699af81674c6794ca98fa4a1c7843'

export const newsRequest = async (dataInput = "Kyiv", page) => {
  try {
    const date = new Date();
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
    const localeString = date.toLocaleString('uk-UA', options);
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${dataInput ? dataInput : "kyiv"}&apiKey=${API_KEY}&pageSize=4&sortBy=publishedAt&page=${page}`
    );
    if (response.data.totalResults === 0) {
      throw new Error('Limit reached');
    }
    return response.data.articles;
  } catch (error) {
    throw new Error('Error fetching news:', error);
  }
};
