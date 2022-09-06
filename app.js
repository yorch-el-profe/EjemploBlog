const { createServer } = require('http');

const server = createServer(function (request, response) {
  response.write('Hello World');
  response.end();
});

const port = process.env.PORT || 8080;

server.listen(port, function () {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});