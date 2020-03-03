const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const {validateUser} = require ('../users/users-helpers.js');

//Register
router.post('/register', (req, res) => {
    let user = req.body;
    
    const validateResult = validateUser(user);

    if(validateResult.isSuccessful === true){

        const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
        user.password = hash;
        req.user = user;
      
        Users.add(user)
          .then(saved => {
            res.status(201).json(saved);
          })
          .catch(error => {
            res.status(500).json(error);
          });
      
        }else{
          res.status(400).json({message: 'Invalid Info about the User. See errors for details',
        errors: validateResult.errors})
        }
      });

//Login
router.post('/login', (req, res) => {
    let { username, password } = req.body;
    
    Users.findBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        //2. produce a token
        const token = getJwtToken(user);
        //3. send the token to the clinet
        res.status(200).json({
          message: `Welcome, ${user.username}!`,
          token: token,
          user_id: user.id
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function getJwtToken(user){
    const payload = { 
      subject: user.id,
      username: user.username
    }
  
    const secret = process.env.JWT_SECRET || 'cat0range' //env
  
    return jwt.sign(payload, secret)
  }

  module.exports = router;