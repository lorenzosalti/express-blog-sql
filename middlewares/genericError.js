function genericError(err, req, res, next) {

  res.status(500);
  res.json({
    status: 500,
    error: err.message
  });

};


module.exports = genericError;