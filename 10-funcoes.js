// Funções são blocos de código criadas para executar uma tarefa específica.

/* 
    estrutura de uma função

    function nomeDaFuncao (){
        bloco de código que será executado
    }
*/

// Exemplo básico de uma função

function darBoasVindas() {
    console.log("Olá, Seja bem vind@!");
}

// Ativando/invocando/chamando a função
darBoasVindas();


// Funções com parâmetros e argumentos
// Parâmetros são nos parentêses
function fazerSuco(fruta) {
    console.log(`Preparando o suco de ${fruta}...`);
}

fazerSuco("Laranja");
fazerSuco("Banana");
fazerSuco("Maçã");

function soma(a, b) {
    let resultado = a + b
    console.log(resultado);
}

soma(10, 37);
soma(32, 37);
soma(37, 48);
soma(21, 42);

// Apresentando pessoas
function apresentarPessoa(nome, sobrenome) {
    // O sinal de + pode ser utilizado para concatenar informações
    // concatenar = unir/juntar dados
    console.log("Olá, meu nome é " + nome + " " + sobrenome + ".");
    // console.log(`Olá, meu nome é ${nome} ${sobrenome}`);
}

apresentarPessoa("Kauã", "Henrique");

// Funções com retorno
console.log("--- Funções com retorno ---");
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(2, 5));

const resultado = multiplicar(3, 5);
console.log(resultado);

// Conhecendo funções anônimas
const saudacao = function () {
    console.log("Olá Kauã! Bom dia");
}

// Ativando função anônima
// Utilizamos o nome da variável para referenciar a função e ativá-la
saudacao()


// Conhecendo as Arrow Functions (Função da seta)

const banana = () => {
    console.log("Amo comer banana!");
}

banana()