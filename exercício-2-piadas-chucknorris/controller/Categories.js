const { getCategories } = require('../model/Category');

const listCategories = async (req, res) => {
  const categories = await getCategories();
  console.log(categories);
  
  return res.render('categories/index', { categories });
}

const redirectToCategories = (_req, res) => {
  res.redirect('/categories');
};

module.exports = {
  listCategories,
  redirectToCategories
}