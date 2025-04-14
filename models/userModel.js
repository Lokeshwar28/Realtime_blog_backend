import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Blog from './Blog.js';

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

User.hasMany(Blog, {
  foreignKey: 'user_id'
});

export default User;