const express = require('express')
// const { list, detail, insert, destroy, update } = require('../controller/user.controller')
const { register, login, list } = require('../controller/user.controller')
const router = express.Router()

// const jwtAuth = require('../middleware/jwtAuth');

// API GET users - list
router
  .get('/user', list)
//   .get('/user/:id', detail)
//   .post('/user', insert)
//   .put('/user/:id', update)
//   .delete('/user/:id', destroy)


  //register
  .post('/register', register)
  //login
  .post('/login', login)

module.exports = router