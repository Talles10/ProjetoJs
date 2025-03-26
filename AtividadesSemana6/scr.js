const fundo = document.createElement("div");
fundo.style.display = "flex";
fundo.style.marginTop = "100px";
fundo.style.justifySelf = "center";
fundo.style.flexDirection = "column";
fundo.style.alignItems = "center";
fundo.style.justifyContent = "center";
fundo.style.width = "300px";
fundo.style.height = "500px";
fundo.style.backgroundColor = "black";
fundo.style.padding = "10px";
fundo.style.borderRadius = "15px";

const tela = document.createElement("div");
tela.style.width = "90%";
tela.style.height = "80px";
tela.style.backgroundColor = "white";
tela.style.color = "black";
tela.style.margin = "10px";
tela.style.fontSize = "40px";
tela.style.fontWeight = "bold";
tela.style.display = "flex";
tela.style.alignItems = "center";
tela.style.justifyContent = "right";
tela.style.padding = "10px";
tela.style.borderRadius = "5px";
tela.innerText = "0"; 

const botoesContainer = document.createElement("div");
botoesContainer.style.display = "grid";
botoesContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
botoesContainer.style.gap = "10px";
botoesContainer.style.width = "100%";
botoesContainer.style.marginTop = "10px";

const botoes = [
    { texto: "AC", cor: "lightgray" }, { texto: "+/-", cor: "lightgray" }, { texto: "%", cor: "lightgray" }, { texto: "÷", cor: "orange" },
    { texto: "7", cor: "gray" }, { texto: "8", cor: "gray" }, { texto: "9", cor: "gray" }, { texto: "×", cor: "orange" },
    { texto: "4", cor: "gray" }, { texto: "5", cor: "gray" }, { texto: "6", cor: "gray" }, { texto: "-", cor: "orange" },
    { texto: "1", cor: "gray" }, { texto: "2", cor: "gray" }, { texto: "3", cor: "gray" }, { texto: "+", cor: "orange" },
    { texto: "0", cor: "gray" }, { texto: ",", cor: "gray" }, { texto:".",  cor: "black"}, { texto: "=", cor: "orange" }
];
//forEach para criar os botões
botoes.forEach(botaoInfo => {
    const botao = document.createElement("button");
    botao.innerText = botaoInfo.texto;
    botao.style.backgroundColor = botaoInfo.cor;
    botao.style.color = botaoInfo.cor === "orange" ? "white" : "black";
    botao.style.borderRadius = "25px";
    botao.style.width = botaoInfo.largura || "50px";
    botao.style.height = "50px";

    botoesContainer.appendChild(botao);
});

//Com o appendChild, o fundo recebe a tela e o botoesContainer
fundo.appendChild(tela);
fundo.appendChild(botoesContainer);

//Com o appendChild, o body recebe o fundo
document.body.appendChild(fundo);
