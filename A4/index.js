//Variáveis e Tipos de Dados:

let nome = "João"; // String (texto)
let idade = 25;    // Número inteiro
let altura = 1.75; // Número de ponto flutuante (decimal)
let ehEstudante = true; // Booleano (verdadeiro/falso)


/* Operadores Básicos: */

let a = 10;
let b = 5;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;

console.log(soma, subtracao, multiplicacao, divisao);

/* Tipagem Dinâmica */

let x = "5";
let y = 2;
console.log(x + y); // Resultado: "52" (concatenação de strings)


/* Strings e Concatenação: */

let nome = "Maria";
let sobrenome = "Silva";

let nomeCompleto = nome + " " + sobrenome;
console.log("Nome completo: " + nomeCompleto);

/* Interagindo com o Usuário: */

let nome = prompt("Qual é o seu nome?");
console.log("Olá, " + nome + "!");


/* Condicionais (if/else): */

let idade = prompt("Qual é a sua idade?");

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}


/* Laços de Repetição (for): */

for (let i = 1; i <= 5; i++) {
    console.log("Número: " + i);
  }


/*   Funções: */

function saudacao(nome) {
    console.log("Olá, " + nome + "!");
  }
  
  saudacao("Ana");
  
  
