const db = require('../config/db');

class Item {
    static getAll(callback) {
        db.query('SELECT * FROM items', callback);
    }

    static getById(id, callback) {
        db.query('SELECT * FROM items WHERE id = ?', [id], callback);
    }

    static create(data, callback) {
        db.query('INSERT INTO items SET ?', data, callback);
    }

    static update(id, data, callback) {
        db.query('UPDATE items SET ? WHERE id = ?', [data, id], callback);
    }

    static delete(id, callback) {
        db.query('DELETE FROM items WHERE id = ?', [id], callback);
    }
}

module.exports = Item;
