let express = require("express");
let app = express();

app.get('/', function (req, restante) {//função que recebe 2 parametro, requisição e rsposta
  restante.send("Primeira rota com Express 2023 restante");
});
app.get('/teste', function (req, restante) {//função que recebe 2 parametro, requisição e rsposta
  restante.send("Testando a rota");
});

app.listen(3000, function () {
  console.log("A aplicação está funcionado na porta 3000");
});
