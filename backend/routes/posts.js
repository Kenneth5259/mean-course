const express = require('express');

const checkAuth = require('../middleware/check-auth');
const PostsController = require('../controllers/posts')
const extractFile = require('../middleware/files.js');

const router = express.Router();

router.post("", checkAuth, extractFile, PostsController.newPost);

router.put("/:id", checkAuth, extractFile, PostsController.updatePost);

router.get("", PostsController.getAll);

router.get('/:id', PostsController.getOne);

router.delete('/:id', checkAuth, PostsController.removeOne );

module.exports = router;
