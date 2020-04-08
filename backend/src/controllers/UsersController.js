const connection = require('../database/connections')
const crypto = require('crypto')

module.exports = {
 async create(request, response) {
  const { name, password, email } = request.body
  console.log(name, password, email)

  const id = crypto.randomBytes(3).toString('HEX')

  // operações com o bd
  connection('users').insert({
   id,
   name,
   email,
   password
  })
  return response.json({ id })
 },

 async insert(request, response) {

  connection('users/:email').select().where({
   email: request.params.email
  }).then(
   connection("users/:email").insert({
    picture
   })
  )
  return response.json({ picture })
 }

}