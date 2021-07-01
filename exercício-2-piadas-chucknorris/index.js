const app = require('express')();
const { listCategories, redirectToCategories } = require('./controller/Categories');
const PORT = 3000;

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/categories', listCategories);

app.get('/', redirectToCategories);

app.listen(PORT, () => console.log('Ouvindo a porta ', PORT));
