const express = require("express"); //importou a classe

const port = 8000; // porta TCP do servidor HTTP da aplicação

const app = express(); //cria istancia da classe express

const index = "<a href='/sobre'> Sobre </a><a href='/info'> Info </a>";
const sobre = 'vc está na página "Sobre"<br><a href="/">Voltar</a>';
const info = 'vc está na página "Info"<br><a href="/">Voltar</a>';

// Metodo express. get necessita de dois parâmetros
//Na ARROW FUNCTION, O primeiro são dados do servidor (REQUISITION - 'req')
// o segundo sao os dados que serao enviados ao cliente (result - 'res')
app.get("/", (req, res) => {
  res.send(index);
});

app.get("/sobre", (req, res) => {
  res.send(sobre);
});

app.get("/info", (req, res) => {
  res.send(info);
});
//app.listen() deve ser o último comando da aplicação (app.js)
app.listen(port, () => {
  console.log(`Servidor sendo executado na porta ${port}!`);
});
