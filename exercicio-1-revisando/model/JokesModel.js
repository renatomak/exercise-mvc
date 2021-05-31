const axios = require('axios');
const endpoint = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single'

const getJokes = async () => ( await axios(endpoint)).data.joke;

/* const fetch = require('node-fetch');
const endpoint = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single'

const getJokes = () => {
  const jokes = fetch(endpoint).then(res => {
    console.log('RES: ', res);
    return res.data.joke;
  });

  console.log('JOKES model: ', jokes)
  return jokes;
}; */


module.exports = { getJokes }