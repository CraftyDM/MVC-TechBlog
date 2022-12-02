const router = require('express').Router();
const {Post, User, Reply, Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/notes', withAuth, async function (req, res) {
    const replies = await Reply.findAll({include:[Blog] })
    res.json(replies)
  });

  router.post('/replies', withAuth, async function(req, res) {
    
    const reply = await Reply.create(req.body)
    res.json(reply)
  });