const http = require('http');

const dadosEscolas = `[
  {
    "nome": "Caelum",
    "endereco": "Rua Vergueiro, 3185, São Paulo - SP"
  },
  {
    "nome": "Etec",
    "endereco": "Rua Topázio, 555, São Paulo - SP"
  }
]`

http.createServer(function(request,response){

  if(request.url == '/'){
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.send(`Olá Mundo!`)
  }

  if(request.url == '/escolas'){

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    response.writeHead(200, headers);

    response.end(dadosEscolas)
  }

}).listen(3000,'localhost');

console.log(`Servidor rodando em http://localhost:3000`);


