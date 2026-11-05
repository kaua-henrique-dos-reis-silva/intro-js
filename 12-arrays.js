// Um array é uma estrutura de dados utilizada para armazenar uma coleção(lista) de valores dentro de uma ÚNICA variável.

let aluno1 = "Luís";
let aluno2 = "Murilo";
let aluno3 = "Leila";
let aluno4 = "Samuel";
let aluno5 = "Guilherme";
let aluno6 = "Clara";

// Organizando estrutura com arrays
// A estrutura de um array é representada por []
const alunos = ["Luís", "Murilo", "Leila", "Samuel", "Guilherme", "Clara"]

console.log(alunos);

// Acessando informações de um array
console.log("--- Acessando elementos ---");

console.log(alunos[0]);
console.log(alunos[3]);

// Acessando um elemento sem valor definido
console.log(alunos[6]);

// Descobrindo o tamanho de um array
// Os arrays são como super objetos, e o . serve para acessar propriedades dos objetos
console.log("--- Acessando tamanho do array ---");

console.log(alunos.length);

// Iterando sobre um array
// Iterar: repetir um ato, um processo ou uma sequência de passos
// Index = Posição do array
console.log("--- Percorrendo array ---");

console.log("--- Percorrendo array - For ---");

for (let index = 0; index < alunos.length; index++) {

    const element = alunos[index];
    console.log(element);

}

console.log("--- Percorrendo array - For/of ---");
for (const aluno of alunos) {
    console.log(aluno);
}