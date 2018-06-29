var express = require('express'),
  router = express.Router(),
  ProductController = require('../controllers/ProductController'),
  PostsController = require('../controllers/PostsController')


//-------------------------------Product Routes-----------------------------------
router.get('/posts', PostsController.getPosts);
router.post('/posts', PostsController.createPost);
/*

router.get(
  '/product/getProductsBelowPrice/:price',
  ProductController.getProductsBelowPrice
);
router.post('/product/createProduct', ProductController.createProduct);
router.post('/auth/login', UserController.userlogin);

router.patch('/product/updateProduct/:productId', ProductController.updateProduct);
router.delete('/product/deleteProduct/:productId', ProductController.deleteProduct);
*/

module.exports = router;
