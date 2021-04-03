const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//like_schema
const likeSchema = new mongoose.Schema({
  account_id: Number,
  mac_address: Number,
});

//comment_schema
const commentSchema = new mongoose.Schema({
  account_id: Number,
  content: String,
});
//category_schema
const categorySchema = new mongoose.Schema({
  name: String,
});

//post_schema
const postSchema = new mongoose.Schema({
  account_id: Number,
  title: String,
  category_id: Number,
  content: String,
  image: String,
});

//like model
const Like = mongoose.model('like', likeSchema);
const like = new Like({
  account_id: 1,
  mac_address: null,
});

//comment model
const Comment = mongoose.model('comment', commentSchema);
const comment = new Comment({
  account_id: 1,
  content: 'Happy Birthday!',
});

//category model
const Category = mongoose.model('category', categorySchema);
const category = new Category({
  name: 'Travel',
});

//post model
const Post = mongoose.model('post', postSchema);
const post = new Post({
  account_id: 1,
  title: 'A great holiday',
  category_id: 1,
  content: 'Never been happier than I am right now.',
  image:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZUZmWwhPLSsASHX_mRrWggHaE8%26pid%3DApi&f=1',
});

like.save();
comment.save();
category.save();
post.save();
