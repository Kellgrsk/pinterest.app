const http = require('express');
const PORT = 3000;

const server = http.createServer((req, res) => {
  // Define o cabeçalho como JSON e UTF-8
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ mensagem: 'Servidor Node.js nativo online!' }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
