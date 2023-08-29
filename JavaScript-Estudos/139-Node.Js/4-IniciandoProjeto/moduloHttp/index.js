/**Outro módulo muito utilizado, para  fazer comunicação via HTTP;
 *O módulo já vem com o Node;
 *Pode criar um servidor que serve páginas web para nós;
 */

const { createServer } = require("http");

let server  = createServer((request, response) => { 

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
    <h1>Hello Mundo!</h1>
    <p>Primera página com Node.js</p>
    <p>Ola Universor</p>
    <p>Ola response</p>`);
    response.end();
 });
 

 server.listen(8000);

 console.log("Ouvindo a porta 8000");