const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function find() {
    return db('users').select('id', 'username', 'created_at');
}

function findBy(filter) {
    return db('users').where(filter)
    .first();
}

function findById(id) {
    return db('users').select('id', 'username', 'created_at')
    .where({ id })
    .first();
}

function remove(id) {
    return db('users')
      .where('id', Number(id))
      .del();
}

function update(changes, id) {
    return db('users')
      .where({ id })
      .update(changes);
};

function add(userData){
    return db('users')
    .insert(userData)
}