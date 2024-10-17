const idade = 18;

if (idade >= 18) {
  console.log("maior de idade");
}
else if (idade < 18) {
  console.log("menor de idade");
}
else {
  console.log("idade inválida");
}
//REFATORAÇÃO: refazer com melhorias
//IF, IF para IF / ELSE IF

/**
 * escreva um código que pergunte qual a cor preferida. SE for vermelho, imprima "vermelho", Se for azul, imprima "azul", * SENÃO nã conheço essa cor
 */

const cor_favorita = prompt("Qual a sua cor favorita?");

if (cor_favorita == "vermelho") {
  console.log("vermelho")
}
else if (cor_favorita == "azul") {
  console.log("azul")
}
else {
  console.log(cor_favorita = "não conheço essa cor")
}
console.log(cor_favorita.lenght)