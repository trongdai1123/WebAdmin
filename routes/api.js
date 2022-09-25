var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const userController = require('../components/users/user_controller');
const authen = require('../middleware/authen');
const productController = require('../components/products/product_controller');

router.post('/signup', async function (req, res, next) {
    try {
        const { username, password } = req.body;
        const user = await userController.signup(username, password);
        res.status(200).json({error: false, user: user});
    } catch (error) {
        res.status(501).json({ error: true });
    }
});

router.post('/signin', async function (req, res, next) {
    try {
        const { username, password } = req.body;
        const token = await userController.signin(username, password);
        res.status(200).json({ error: false,token});
    } catch (error) {
        res.status(501).json({ error: true });
    }
});

router.get('/user-info', [authen.checkToken] , async function (req, res, next){
    try{
        const {user: {username,_id}}= req;
        const user = await userController.getInfo(_id);
        res.status(200).json(user);
    }catch (error){
         res.status(501).json({error});
    }
});

router.get('/products', [authen.checkToken] , async function (req, res, next){
    try{
        const  {username, _id} = req.user;
        const products = await productController.get();
        res.status(200).json(products);
    }catch (error){
         res.status(501).json({error});
    }
});

router.post('/dang-nhap', async function (req, res, next) {
    try {
        const { username, password } = req.body;
        const user = await userController.login(username, password);
        if (user) {
            req.session.user = user;

        } else {

        }
    } catch (error) {

    }
});

module.exports = router;
