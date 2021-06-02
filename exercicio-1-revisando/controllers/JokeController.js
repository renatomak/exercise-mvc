const { getJokes } = require('../model/Joke');

const listJokes = async (_req, res) => {
  try {
    const joke = await getJokes();

    return res.render('jokeView.ejs', { joke })
  } catch (error) {
    return res.json({ message: 'Erro ao tentar buscar piada'})
  }
};

module.exports = { listJokes };
