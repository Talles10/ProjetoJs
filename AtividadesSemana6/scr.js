const fundo = document.createElement("div");
fundo.style.position = "absolute";
fundo.style.top = "15%";
fundo.style.left = "40%";
fundo.style.display = "flex";
fundo.style.marginTop = "100px";
fundo.style.flexDirection = "column";
fundo.style.alignItems = "center";
fundo.style.justifyContent = "center";
fundo.style.width = "300px";
fundo.style.height = "500px";
fundo.style.backgroundColor = "black";
fundo.style.padding = "10px";
fundo.style.borderRadius = "15px";
fundo.style.justifySelf = "center";
fundo.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

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
    { texto: "0", cor: "gray" }, { texto: ",", cor: "gray" }, { texto: ".", cor: "gray" }, { texto: "=", cor: "orange" }
];

let expressao = "";

botoes.forEach(botaoInfo => {
    const botao = document.createElement("button");
    botao.innerText = botaoInfo.texto;
    botao.style.backgroundColor = botaoInfo.cor;
    botao.style.color = botaoInfo.cor === "orange" ? "white" : "black";
    botao.style.borderRadius = "25px";
    botao.style.width = botaoInfo.largura || "50px";
    botao.style.height = "50px";
    botao.style.fontSize = "20px";
    botao.style.border = "none";
    botao.style.cursor = "pointer";

    botao.addEventListener("click", () => {
        if (botao.innerText === "AC") {
            expressao = "";
            tela.innerText = "0";
        } else if (botao.innerText === "=") {
            try {
                expressao = expressao.replace("×", "*").replace("÷", "/");
                tela.innerText = eval(expressao);
                expressao = tela.innerText;
            } catch {
                tela.innerText = "Erro";
                expressao = "";
            }
        } else {
            if (tela.innerText === "0" && !isNaN(botao.innerText)) {
                expressao = botao.innerText;
            } else {
                expressao += botao.innerText;
            }
            tela.innerText = expressao;
        }
    });
    botoesContainer.appendChild(botao);});
fundo.appendChild(tela);
fundo.appendChild(botoesContainer);
document.body.appendChild(fundo);
