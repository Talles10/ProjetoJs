let numero = prompt("Digite um numero inteiro");
numero = parseInt(numero);
let resultado = 1;
    if (numero < 0) {
        alert("Insira um numero válido");
    }else{
        for (let i = 1; i <= numero; i++) {
            resultado *= i;
}
    alert("Fatorial de " + numero + " é " + resultado);
}