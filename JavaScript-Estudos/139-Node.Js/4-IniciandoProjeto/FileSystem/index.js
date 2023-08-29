/**
 * Módulo de file system
 * Um dos módulos mais utilizados;
 * Ele serve para trabalhar com arquivos e diretórios;
 * Já é incluso no node, ou seja, não precisamos instalar;
 */

let { readFile, writeFile } = require("fs");

readFile("arquivo.txt", "utf8", (error, texto) => {
  if (error) {
    throw error;
  } else {
    console.log(texto);
  }
});

writeFile("arquivo.txt", 'Texto por write file', (error) => {
  if (error) {
    throw error;
  } else {
    console.log("Texto por write file");
  }
});
