
let numero = prompt("Por favor, insira um número inteiro positivo:");

// Passo 2: Validar a entrada
if (isNaN(numero) || numero <= 0) {
    alert("Por favor, insira um número inteiro positivo válido.");
} 
else{
    let primo = true; // Suponha que o número é primo
    if (numero === 1) {
        primo = false; // 1 não é primo
} 
else 
{
    for (let i = 2; i <= Math.sqrt(numero); i++) { //enquanto i = 2 e i <= a raiz de numero, acrescenta 1 em i
        if (numero % i === 0) {
            primo = false; // Encontrou um divisor, não é primo
            break; // Não precisa continuar verificando
}
}
}

    // Passo 4: Exibir o resultado
    if (primo) {
        alert(numero + " é um número primo.");
    } else {
        alert(numero + " não é um número primo.");
    }
}