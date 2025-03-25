const app = document.getElementById("app");
const criarElemento = (tag, texto = "", classe = "") => {
    const el = document.createElement(tag);
    if (texto) el.innerText = texto;
    if (classe) el.className = classe;
    return el;
};
const criarInput = () => {
    const input = document.createElement("input");
    input.value = 0;
    input.readOnly = true;
    return input;
};
const criarBotao = (texto, classe, onClick) => {
    const botao = criarElemento("button", texto, `botao ${classe}`);
    botao.onclick = onClick;
    return botao;
};
const criarSecao = (tipo, imagemSrc) => {
    const secao = criarElemento("div", "", "grupo");
    const imagem = document.createElement("img");
    imagem.src = imagemSrc;
    const botoes = criarElemento("div", "", "botoes");
    const titulo = criarElemento("p", tipo);
    const input = criarInput();

    botoes.append(
        criarBotao("+", "mais", () => alterarContagem(input, 1)),
        criarBotao("-", "menos", () => alterarContagem(input, -1))
    );

    secao.append(imagem, botoes, titulo, input);
    return { secao, input };
};
const atualizarTotal = () => {
    totalPessoas.value = parseInt(inputHomens.value) + parseInt(inputMulheres.value);
};
const alterarContagem = (input, valor) => {
    const novoValor = Math.max(0, parseInt(input.value) + valor);
    input.value = novoValor;
    atualizarTotal();
};
const contador = criarElemento("div", "", "contador");
const titulo = criarElemento("h2", "Total");
const totalPessoas = criarInput();
const botaoReset = criarBotao("🔄", "reset", () => {
    inputHomens.value = inputMulheres.value = totalPessoas.value = 0;
    atualizarTotal();
});
const { secao: secHomens, input: inputHomens } = criarSecao("Homens", "images.jpeg");
const { secao: secMulheres, input: inputMulheres } = criarSecao("Mulheres", "pngtree-cartoon-business-man-png-image_13118458.png");
const grupoContainer = criarElemento("div", "", "grupo-container");
grupoContainer.append(secHomens, secMulheres);
contador.append(titulo, totalPessoas, botaoReset, grupoContainer);
app.appendChild(contador);
