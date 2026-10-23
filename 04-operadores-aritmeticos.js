// Os operadores aritméticos são utilizados para realizar operações matemáticas, como por exemplo, somar, subtrair, multiplicar e dividir.

const preco = 50
const frete = 15

console.log("----Adição----");

// 1 - Adição ( + )
// Utilizamos esse operador para realizar a soma de valores
const soma = preco + frete

console.log(preco + frete);
console.log(15 + 10);
console.log(soma);

console.log("----Subtração----");

// 2 - Subtração ( - )
// Utilizamos esse operador para realizar a subtração de valores
const subtracao = preco - frete

console.log(subtracao);
console.log(15 - 10);
console.log(preco - frete);

console.log("----Multiplicação----");

// 3 - Multiplicação ( * )
// Utilizamos esse operador para realizar a multiplicaçao de valores
const multiplicacao = preco * frete

console.log(multiplicacao);
console.log(15 * 10);
console.log(preco * frete);

const preco2 = 25
const quantidade = 4

const total = preco2 * quantidade
console.log(total);

console.log("----Divisão----");

// 4 - Divisão ( / )
// Utilizamos esse operador para realizar a divisão de valores
const divisao = preco / frete

console.log(divisao);
console.log(preco / frete);
console.log(10 / 2);
// console.log(10 / 0);

console.log("----Exponenciação----");
// 5 - Exponenciação ( ** )
// Utilizamos esse operador para realizar a exponenciação de valores, ou seja, elevar um número a uma potência
const exponenciacao = preco ** frete

console.log(exponenciacao);
console.log(2 ** 3);

console.log("----Resto da divisão----");

// 6 - Resto da divisão ( % )
// O operador % retorna o RESTO DA DIVISÃO, não o resultado em si.
// Utilizamos esse operador para verificar se um número é impar ou par.
console.log(8 % 2); // resto 0
console.log(7 % 2); // resto 1

console.log("----Incremento----");

// 7 - Incremento ( ++ )
// Esse operador serve para aumentar o valor de uma variável em uma unidade ( 1 )
let contador = 5;

console.log(contador);

contador++ // 6
contador++ // 7
console.log(contador);

console.log("----Decremento----");

// 8 - Decremento
// Esse operador serve para diminuir o valor de uma variável em uma unidade ( 1 )
let vidas = 3
console.log(vidas);

vidas--
console.log(vidas);
