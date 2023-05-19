//função faz o loop e depois continua 
for (let i = 10; i > 0; i = i - 1) {

  if (i % 2 == 0) {
    console.log("Caiu no continue");
    continue;

  }

  console.log(i);

}




for (let a = 200; a > 0; a = a - 1) {

  if (a % 2 == 0) {
    console.log("Loop");
    continue;
  }
  console.log(a);
}