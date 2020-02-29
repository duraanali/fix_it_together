const db = require('../database/dbConfig')

module.exports = {
    add,
    find,
    findById,
    update,
    remove
}

//Find Posts
function find(){
    return db("posts")
    .select('id', 'created_at', 'creator_id', 'title', 'desc', 'upvotes', 'downvotes', 'resolved')
    .orderBy('upvotes', 'desc')
}


function findById(id) {
    return db('posts')
    .where({id})
    .select('id', 'created_at', 'creator_id', 'title', 'desc', 'upvotes', 'downvotes', 'resolved')
    .orderBy('upvotes', 'desc')
}

//Add Users Post
function add(user){
    return db('posts')
    .insert(user)
    .then(ids => {
        const [id] = ids;
        return db("posts")
        .select('id', 'created_at', 'creator_id', 'title', 'desc', 'upvotes', 'downvotes', 'resolved')
        .orderBy('upvotes', 'desc')
    })
}

//Update Posts
function update(id, changes){
    return db('posts')
    .where({id})
    .update(changes)
    .then(()=>{
        return db("posts")
        .orderBy('upvotes', 'desc')
    })
}

//Delete Posts
function remove(id){
    return db("posts")
    .where({id})
    .delete()
}

