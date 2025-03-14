//Exercicio 3






//Exercicio 2 
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

// Exemplos de uso
console.log(numeroPrimo(7));      
console.log(numeroPrimo(10));    
console.log(numeroPrimo("xpto")); 
console.log(numeroPrimo(17));     
console.log(numeroPrimo(20));     


//Exercicio 3

function ehPalindromo(texto) {
    if (typeof texto !== "string") return false;
    
    let textoFormatado = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
    let textoInvertido = textoFormatado.split("").reverse().join("");
    
    return textoFormatado === textoInvertido;
}

// Exemplos de uso
console.log(ehPalindromo("arara"));                    
console.log(ehPalindromo("A base do teto desaba"));    
console.log(ehPalindromo("xpto"));                     