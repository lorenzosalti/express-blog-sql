function notFound(req, res, next) {

  res.status(404);
  res.json({
    status: 404,
    error: 'Not found'
  });

};

module.exports = notFound;