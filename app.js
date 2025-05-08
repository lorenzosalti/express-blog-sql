const express = require('express');
const app = express();
const postsRouter = require('./routers/posts.js');
const port = 3000;

// middlewares
const genericError = require('./middlewares/genericError.js');
const notFound = require('./middlewares/notFound.js');

// public folder
app.use(express.static('public'));

app.use(express.json());



// homepage
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

// posts router
app.use('/posts', postsRouter);


// middleware for handling errors
app.use(genericError);
app.use(notFound);


// server listen
app.listen(port, () => {
  console.log('Server in ascolto alla porta ' + port);
});

