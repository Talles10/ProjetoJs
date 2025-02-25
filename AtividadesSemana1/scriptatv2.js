let numero = prompt("Por favor, insira um número inteiro positivo:");
if (isNaN(numero) || numero <= 0) {
    alert("Por favor, insira um número inteiro positivo válido.");
} else{
    let primo = true; 
    if (numero === 1) {
        primo = false; 
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) { 
        if (numero % i === 0) {
            primo = false;
            break;
}}}
    if (primo) {
        alert(numero + " é um número primo.");
    } else {
        alert(numero + " não é um número primo.");
    }
}