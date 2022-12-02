const router = require('express').Router();
const {Post, User, Blog} = require('../models');
const withAuth = require('../utils/auth');


router.get('/blogs', withAuth, async function(req,res) {
    const blogs = await Blog.findAll({include: [User]})
    res.json(blogs)
});

module.exports = router;