const express = require('express')

const UsersController = require('./controllers/UsersController')

const routes = express.Router()

routes.post('/users', UsersController.create)
routes.post('/users', UsersController.insert)

// routes.get('/', (request, response) => {
//  return response.json({ message: 'Testes ' })
// })

module.exports = routes