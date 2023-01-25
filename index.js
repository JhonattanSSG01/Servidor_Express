const express = require('express');
const app = express();
const port = 0;
// req para coger las respuesta los usuarios
// res para mostrar en pantalla
app.get("/", (req, res) => {
  res.send('hola mundo') //Enviamos algo
})

app.listen(port, function () {
  console.log('Mi puerto es ', this.address().port)
});
