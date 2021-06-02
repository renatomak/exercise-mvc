const app = require('express')();
const { listJokes } = require('./controllers/JokeController');

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', listJokes)

app.listen(port, () => console.log(`Ouvindo a porta ${port}`))
