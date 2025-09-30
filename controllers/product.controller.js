const Product = require('../models/product.model');
const ApiResponse = require('../library/ApiResponse.library');

const create = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(ApiResponse.success(product));
    } catch (error) {
        res.status(500).json(ApiResponse.error(error.message));
    }
}

const list = async (req, res) => {
    try {
        const proudcts = await Product.find({});
        res.status(200).json(ApiResponse.success(proudcts));
    } catch (error) {
        res.status(500).json(ApiResponse.error(error.message));
    }
}

const get = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.status(200).json(ApiResponse.success(product));
    } catch (error) {
        res.status(500).json(ApiResponse.error(error.message));
    }
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            res.status(404).json(ApiResponse.error('product not found'));
        }

        const updated_product = await Product.findById(id);

        res.status(200).json(ApiResponse.success(updated_product));
    } catch (error) {
        res.status(500).json(ApiResponse.error(error.message));
    }
}

const destroy = async (req, res) => {
    try {
        const id = req.params.id;
        const product = Product.findByIdAndDelete(id);

        if (!product) {
            res.status(404).json(ApiResponse.error('product not found'));
        }

        res.status(200).json(ApiResponse.success('product deleted'));
    } catch (error) {
        res.status(500).json(ApiResponse.error(error.message));
    }
}

module.exports = { create, list, get, update, destroy }