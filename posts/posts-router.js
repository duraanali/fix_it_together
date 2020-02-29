const router = require('express').Router()
const Posts = require('./posts-model.js');

//GET a list of Posts
//GET /posts/
router.get('/', (req, res) => {
 Posts
 .find()
 .then(post => {
     res.json(post);
 })
 .catch(err => res.send(err));
});

//GET a specific Posts ID
//GET /posts/:id
router.get('/:id', (req, res) => {
    Posts
    .findById(req.params.id)
    .then(post => res.status(200).json(post))
    .catch(err => {
        res.status(404).json({ message: 'Post not Found, Failed to get Post ID.', err });
      });
})

//POST a post
//POST /posts
router.post('/', (req, res) => {
    const postData = req.body;
    Posts
    .add(postData)
    .then(post => {
      res.status(201).json(post);
    })
    .catch (err => {
      res.status(404).json({ message: 'Failed to POST post issue.' });
    });
  });

  //PUT a Post ID
  //PUT /post/:id
  router.put('/:id', (req,res) =>{
    const postData = req.body;
    Posts
    .update(req.params.id, postData)
    .then(post=>{
        res.status(200).json(post);
    })
    .catch(err=>{
        res.status(404).json({ message: 'Failed to update post.'})
    })
  })

  //DELETE a Post ID
  //DELETE /posts/:id
    router.delete('/:id', (req, res) => {
    Posts.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: "The Post has been deleted."
        });
      } else {
        res.status(404).json({
          message: "The Post does not exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Error deleting the Post."
      });
    });
});
module.exports = router;