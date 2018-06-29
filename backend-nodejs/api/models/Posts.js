var mongoose = require('mongoose');

var postsSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  catogries: {
    type: [String],
    required: true,
  },
  content: {
    type: String,
  },
  title: {
    type: String,
  },
},{collection: 'posts'}
);

mongoose.model('Post', postsSchema);
