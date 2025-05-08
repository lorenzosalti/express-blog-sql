const posts = require('../data/posts.js');



// index
function index(req, res) {

  const tags = req.query.tags;

  if (tags) {

    const filteredPosts = posts.filter(post => post.tags.length && post.tags.includes(tags));

    if (!filteredPosts.length) {
      return res.status(404).json({
        status: 404,
        error: 'Not found',
        message: 'Post non trovato'
      });
    };

    res.json(filteredPosts);

    return;
  }

  res.json(posts);
};



// show
function show(req, res) {

  const postId = parseInt(req.params.id);
  const requiredPost = posts.find(posts => posts.id === postId);

  if (!requiredPost) {
    return res.status(404).json({
      status: 404,
      error: 'Not found',
      message: 'Post non trovato'
    });
  };

  res.json(requiredPost);
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