// Variáveis - Uma variável nada mais é do que um identificador que permite acessar um valor armazenado durante a execução do código.

// Exemplo: Imagine uma caixa etiquetada - A etiqueta é o nome da variável e o conteúdo é o valor atual que ela armazena/representa
//  let etiqueta - valor

let nome = "Kauã";



/* O JavaScript possui três formas de declarar variáveis */

// 1 - const
const pais = "Brasil";
console.log(pais)

// Com a declaração const, não é possível reatribuir novos valores paraa uma variável. Descomente a linha abaixo para ver o erro no console.
// pais = "Portugal";

// 2 - let
let idade = 20;
console.log(idade)

// Redeclarando o valor da variável
idade = 23
console.log(23)

idade = 40
console.log(40)
// Use let para valores alteráveis

// 3 - var (Não recomendado)
var cidade = "São Paulo"
console.log(cidade)

// Reatribuindo o valor da variável
cidade = "Santos"
console.log(cidade)