const Item = require('../models/itemModel');

exports.getAllItems = (req, res) => {
    Item.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getItemById = (req, res) => {
    const id = req.params.id;
    Item.getById(id, (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: 'Item not found' });
        res.json(results[0]);
    });
};

exports.createItem = (req, res) => {
    const data = req.body;
    Item.create(data, (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'Item created', id: results.insertId });
    });
};

exports.updateItem = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Item.update(id, data, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Item updated' });
    });
};

exports.deleteItem = (req, res) => {
    const id = req.params.id;
    Item.delete(id, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Item deleted' });
    });
};
