const router = require('express').Router();
const Users = require('./users-model.js');
const Posts = require('../posts/posts-model.js')

//GET a list of Users
//GET /users/
router.get('/', (req, res) => {
 Users.find()
 .then(users => {
     res.json(users);
 })
 .catch(err => res.send(err));
});


//GET a specific Users ID
//GET /users/:id
router.get('/:id', async (req, res) => {
  const userId = req.params.id
  try{
    const user = await Users.findById(userId)
    const posts = await Posts.findPostsByUserId(userId)
    user.posts = posts
    res.status(200).json(user)
  }
   catch(err) {
      res.status(404).json({ message: 'User not Found, Failed to GET User ID.', err });
    };
})


//POST a User
//POST /users
router.post('/', (req, res) => {
    const userData = req.body;
    Users
    .add(userData)
    .then(user => {
      res.status(201).json(user);
    })
    .catch (err => {
      res.status(404).json({ message: 'Failed to POST to /users.' });
    });
  });

  //PUT a User ID
  //PUT /users/:id
  router.put('/:id', (req,res) =>{
    const userData = req.body;
    Users
    .update(userData, req.params.id)
    .then(user=>{
        res.status(200).json(user, {messsage: 'Updated Successfully!'});
    })
    .catch(err=>{
        res.status(404).json({ message: 'Failed to update User.'})
    })
  })

  //DELETE a User ID
  //DELETE /users/:id
    router.delete('/:id', (req, res) => {
    Users.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: "The User has been deleted."
        });
      } else {
        res.status(404).json({
          message: "The User does not exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Error deleting the User."
      });
    });
});
module.exports = router;