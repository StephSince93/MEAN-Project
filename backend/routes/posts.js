const express = require('express');

const checkAuth = require('../middleware/check-auth');
const extractFile = require('../middleware/file');
const PostController = require('../controllers/posts');

const router = express.Router();

router.post('',
checkAuth, // Middleware checking for authentication with Token
extractFile, // Middleware for uploading file
PostController.savePost);

router.put(
  "/:id",
  checkAuth, //Middleware checking for authentication with Token
  extractFile, // Middleware for uploading file
  PostController.updatePost);

router.get('', PostController.getPosts);

router.get('/:id', PostController.getPost);

router.delete(
  '/:id',
  checkAuth, //Middleware checking for authentication with Token
  PostController.deletePost)

module.exports = router;
