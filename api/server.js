const express = require('express');
const helmet = require('helmet');

const usersRouter = require('../users/users-router.js');
const postsRouter = require('../posts/posts-router.js')
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.send('🗡 ==={ The API that you seek is running 🔥😎🎉}===🗡')
})

module.exports = server;