const db = require('../database/dbConfig')

module.exports = {
    add,
    find,
    findById,
    update,
    remove,
    findPostsByUserId
}

//Find Posts
function find(){
    return db("posts")
    .select('id', 'created_at', 'creator_id', 'title', 'desc', 'upvotes', 'downvotes', 'resolved', 'zipcode', 'city', 'state')
    .orderBy('upvotes', 'desc')
}


function findById(id) {
    return db('posts')
    .where({id})
    .select('id', 'created_at', 'creator_id', 'title', 'desc', 'upvotes', 'downvotes', 'resolved', 'zipcode', 'city', 'state')
    .orderBy('upvotes', 'desc')
}

//Find posts by user id
async function findPostsByUserId(id){
    return await db('posts')
    .join('users', 'posts.creator_id', 'users.id')
    .where('users.id', id)
    .select('posts.id', 'posts.created_at', 'posts.creator_id', 'posts.title', 'posts.desc', 'posts.upvotes', 'posts.downvotes', 'posts.resolved')
}

//Add Users Post
function add(user){
    return db('posts')
    .insert(user)
    .then(ids => {
        const [id] = ids;
        return db("posts")
        .select('id', 'created_at', 'creator_id', 'title', 'desc', 'upvotes', 'downvotes', 'resolved', 'zipcode', 'city', 'state')
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

