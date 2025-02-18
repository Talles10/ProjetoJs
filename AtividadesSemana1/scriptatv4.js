let entrada = prompt("Digite um valor:");
let confirmacao = prompt("Deseja verificar o tipo do dado informado? (Sim/Não)");
let resposta = "";
for (let i = 0; i < confirmacao.length; i++) {
    resposta += ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(confirmacao[i])) ? confirmacao[i].toLowerCase() : confirmacao[i];
}
if (resposta === "sim") {
    let ehNumero = true;
    for (let i = 0; i < entrada.length; i++) {
        if ((entrada[i] < '0' || entrada[i] > '9') && entrada[i] !== '.') {
            ehNumero = false;
            break;
        }
    }
    if (ehNumero && entrada.length > 0) {
        document.write("O dado informado é do tipo Number");
    } else {
        document.write("O dado informado é do tipo String");
    }
} else {
    document.write("Obrigado por visitar esta página");
}