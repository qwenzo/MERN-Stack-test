var mongoose = require('mongoose'),
posts = mongoose.model('Post');

module.exports.getPosts = function(req, res, next) {
  posts.find({}).exec(function(err, posts) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg: 'Posts retrieved successfully.',
      data: posts
    });
  });
};


module.exports.createPost = function(req, res, next) {
    //console.log(req.body);
    //console.log(req.body.id,req.body.content,req.body.catogries);
    valid = req.body.id && req.body.content && req.body.catogries ;
    if(!valid){
        return res.status(422).json({
            err: null,
            msg: 'not valid',
            data: null
          });
    }
    posts.create(req.body).exec(function(err, posts) {
      if (err)  {
        return res.status(422).json({
          err: null,
          msg: 'stuff',
          data: null
        });
      }
      res.status(200).json({
        err: null,
        msg: 'Posts created successfully.',
        data: posts
      });
    });
  };