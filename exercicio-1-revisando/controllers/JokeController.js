const { getJokes } = require('../model/JokesModel');

const listJokes = async (_req, res) => {
  try {
    const joke = await getJokes();

    return res.render('jokeView', { joke })
  } catch (error) {
    return res.json({ message: 'Erro ao tentar buscar piada'})
  }
};

module.exports = { listJokes };
