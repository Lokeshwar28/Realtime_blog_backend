import Blog from './Blog.js';
import User from './userModel.js';

User.hasMany(Blog, { foreignKey: 'user_id' });

Blog.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'author',
});