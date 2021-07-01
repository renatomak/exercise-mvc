const axios = require('axios');

const endpoint = 'https://api.chucknorris.io/jokes/categories';

const getCategories = async () => {
  const categories = await axios.get(endpoint);
  
  return categories.data;
};

module.exports = { getCategories };
