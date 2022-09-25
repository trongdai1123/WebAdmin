var express = require('express');
var router = express.Router();

const productController = require('../components/products/product_controller');
const categoryController = require('../components/categories/category_controller');
const middleware = require('../middleware/upload');



router.get('/', async function (req, res, next) {
  const { page, size } = req.query;
  const products = await productController.get(page, size);
  res.render('products', { products });
});

/**
 * Get product by id.
 * http://localhost:3000/san-pham/chi-tiet/1
 */

router.get('/chi-tiet/:id', async function (req, res, next) {
  const { id } = req.params;
  const { product, categories } = await productController.getById(id);
  res.render('product', { product, categories });

});

// update
router.post(
  '/chi-tiet/:id',
  [middleware.single('image')],
  async function (req, res, next) {
    let { body, file } = req;
    let{id} = req.params;
    delete body.image;
    if (file) {
      let image = `http://192.168.85.119:3000/images/${file.filename}`;
      body = { ...body, image: image };
    }
    await productController.update(id,body);

    res.redirect('/san-pham');

  });

//http://localhost:3000/san-pham/them-moi

router.get('/them-moi', async function (req, res, next) {
  const categories = await categoryController.get();
  res.render('form', { categories });

});

// middleware
router.post(
  '/them-moi',
  [middleware.single('image')],
  async function (req, res, next) {
    let { body, file } = req;
    if (file) {
      let image = `http://192.168.85.119:3000/images/${file.filename}`;
      body = { ...body, image: image }
    }
    await productController.insert(body);

    res.redirect('/san-pham');

  });


  router.post(
    '/xoa/:id',
    [],
    async function (req, res, next) {
      let { id} = req.params;
      await productController.remove(id );
  
     res.json({ success: true}); 
  
    });



module.exports = router;
