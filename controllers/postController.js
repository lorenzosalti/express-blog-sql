const posts = require('../data/posts.js');

const connection = require('../data/db');



// index
function index(req, res) {

  // sql query
  const sql = 'SELECT * FROM posts';

  // connection to db
  connection.query(sql, (err, results) => {

    if (err) return res.status(500).json({ error: 'Database query failed' });

    res.json(results);

  });
};



// show
function show(req, res) {

  // post id from request
  const postId = req.params.id;

  // sql query
  const sql = 'SELECT * FROM posts WHERE id = ?';

  // connection to db
  connection.query(sql, [postId], (err, results) => {

    // db or query fail
    if (err) return res.status(500).json({ error: 'Database query failed' });

    // post not found
    if (results.length === 0) return res.status(404).json({ error: 'Pizza not found' });

    res.json(results[0]);
  });
};



// store
function store(req, res) {

  const id = posts[posts.length - 1].id + 1;
  const { title, content, image, tags } = req.body;
  const newPost = {
    id,
    title,
    content,
    image,
    tags
  };

  console.log(newPost);

  posts.push(newPost);

  res.status(201).json(newPost);
};



// update
function update(req, res) {

  const postId = parseInt(req.params.id);
  const updatePost = posts.find(posts => posts.id === postId);
  const { title, content, image, tags } = req.body;

  if (!updatePost) {
    return res.status(404).json({
      status: 404,
      error: 'Not found',
      message: 'Post non trovato'
    });
  };

  updatePost.title = title;
  updatePost.content = content;
  updatePost.image = image;
  updatePost.tags = tags;


  res.json(updatePost);
};



// modify
function modify(req, res) {

  const postId = parseInt(req.params.id);
  const modifyPost = posts.find(posts => posts.id === postId);
  const { title, content, image, tags } = req.body;

  if (!modifyPost) {
    return res.status(404).json({
      status: 404,
      error: 'Not found',
      message: 'Post non trovato'
    });
  };

  if (title) modifyPost.title = title;
  if (content) modifyPost.content = content;
  if (image) modifyPost.image = image;
  if (tags) modifyPost.tags = tags;

  res.json(modifyPost);
};



// destroy
function destroy(req, res) {

  const postId = parseInt(req.params.id);
  const requiredPost = posts.find(posts => posts.id === postId);

  if (!requiredPost) {
    return res.status(404).json({
      status: 404,
      error: 'Not found',
      message: 'Post non trovato'
    });
  };

  posts.splice(posts.indexOf(requiredPost), 1);

  console.log(posts);

  res.sendStatus(204);
};



module.exports = { index, show, store, update, modify, destroy };