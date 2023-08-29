const express = require("express");
const app = express();
const db = require("./db/connection");

const PORT = 3000;

app.listen(PORT, function () {
  //para escultar a porta.
  console.log(`O Express está rodadno na porta ${PORT}`);
});

// db connection
db.authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucess");
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar", err);
  });

//routes
app.get("/", (req, res) => {
  //criação da rota.
  res.send("Está funcionando 10");
});
