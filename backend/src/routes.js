const express = require('express')
const crypto = require('crypto')
const connection = require('./database/connections')

const routes = express.Router()

routes.post('/users', (request, response) => {
 const { name, password } = request.body
 console.log(data)
 const id = crypto.randomBytes(3).toString('HEX')

 connection('users').insert({
  id,
  name,
  password
 })
 return response.json({ id })
})

// routes.get('/', (request, response) => {
//  return response.json({ message: 'Testes ' })
// })

module.exports = routes