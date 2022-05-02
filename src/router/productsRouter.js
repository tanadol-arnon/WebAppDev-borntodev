const express = require('express');
const productsRouter = express.Router();
const productData = require('../data/products.json');

productsRouter.get("/", (req, res) => {
    res.render('products', { productData });
});

productsRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    res.render("product_detail", { product: productData[id] })
});

module.exports = productsRouter;