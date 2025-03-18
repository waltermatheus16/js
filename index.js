function somarElementos(array) {
    
    if (!Array.isArray(array) || array.some(elemento => typeof elemento !== "number")) {
        return "valor inválido detectado";
    }

    
    return array.reduce((soma, numero) => soma + numero, 0);
}

console.log("Exercício 1:");
console.log(somarElementos([1, 2, 3, 4, 5]));   
console.log(somarElementos([-1, 10, 20]));      
console.log(somarElementos([45, 5, "xpto"]));   
console.log(somarElementos([]));               
console.log(somarElementos("teste"));           
console.log(somarElementos([2.5, 3.1, 4.4]));   

// Exercicio 2
function numeroPrimo(numero) {
    if (!Number.isInteger(numero)) return "valor invalido detectado";
    if (numero < 2) return false;
    
    let divisor = 2;
    while (divisor <= numero / 2) {
        if (numero % divisor === 0) return false;
        divisor++;
    }
    return true;
}

console.log("Exercício 2:");
console.log(numeroPrimo(7));      
console.log(numeroPrimo(10));    
console.log(numeroPrimo("xpto")); 
console.log(numeroPrimo(17));     
console.log(numeroPrimo(20));     

// Exercicio 3
function ehPalindromo(texto) {
    if (typeof texto !== "string") return false;
    
    let textoFormatado = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
    let textoInvertido = textoFormatado.split("").reverse().join("");
    
    return textoFormatado === textoInvertido;
}

console.log("Exercício 3:");

console.log(ehPalindromo("arara"));                    
console.log(ehPalindromo("A base do teto desaba"));    
console.log(ehPalindromo("xpto"));                     


// Exercicio 4

const readline = require("readline");

// Criar interface para entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const opcoes = ["pedra", "papel", "tesoura"];

// Perguntar ao usuário
rl.question("Exercício 4 - Escolha pedra, papel ou tesoura: ", (entradaUsuario) => {
    entradaUsuario = entradaUsuario.toLowerCase();

    // Validar entrada
    if (!opcoes.includes(entradaUsuario)) {
        console.log("Escolha inválida! Tente novamente.");
        rl.close();
        return;
    }

    // Escolha aleatória do computador
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    
    console.log(`Computador escolheu: ${escolhaComputador}`);

    // Verificar vencedor
    if (entradaUsuario === escolhaComputador) {
        console.log("Empate!");
    } else if (
        (entradaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (entradaUsuario === "tesoura" && escolhaComputador === "papel") ||
        (entradaUsuario === "papel" && escolhaComputador === "pedra")
    ) {
        console.log("Você ganhou!");
    } else {
        console.log("Você perdeu!");
    }

    rl.close(); // Fechar a entrada
});

