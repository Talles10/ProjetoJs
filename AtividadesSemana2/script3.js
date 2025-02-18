function verificarPalindromo() {
    let texto = document.getElementById("entradaTexto").value;
    let textoFormatado = texto.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let palindromo = textoFormatado === textoFormatado.split("").reverse().join("");
    if (palindromo) {
        alert("É um palíndromo!");
    } else {
        alert("Não é um palíndromo.");
    }
}