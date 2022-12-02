//from mini project module14

const User = require('./User');
const Blog = require('./Blog');
const Reply = require('./Reply');
const { post } = require('../controllers/api/blogRoutes');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasMany(Reply, {
  foreignKey:'blog_id',
  onDelete: 'CASCADE'
});
Reply.belongsTo(Blog, {
  foreignKey: 'blog_id'
});


module.exports = { User, Blog, Reply };
