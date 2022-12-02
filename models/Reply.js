const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const {Blog, User, Reply} = require('../models');
class Reaply extends Model { }

Reaply.init({
    body: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'blog' })

module.exports = Blog;