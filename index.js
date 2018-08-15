const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hola desde Node! heroku')
})

app.listen(3000, function () {
  console.log('Servidor creado y escuchando en el puerto 3000!')
})
