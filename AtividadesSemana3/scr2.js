let vetmarca = [];
let vetmodelo = [];
let vetano = [];
let vetcor = [];
let vetkm = [];
let vetfipe = [];
let ano = null;
let fipe = null;
function armazenar(){
    let marca = document.getElementById("marca").value.trim();
    let modelo = document.getElementById("modelo").value.trim();
    let anoInput = document.getElementById("ano").value.trim();
    let cor = document.getElementById("cor").value.trim();
    let kmInput = document.getElementById("km").value.trim();
    let fipeInput = document.getElementById("fipe").value.trim();
    

    if (marca === "" || modelo === "" || anoInput === "" || cor === "" || kmInput === "" || fipeInput === "") {
        alert('Para cadastrar, preencha todos os campos');
        return;
    }
    fipe = parseInt(fipeInput);
    ano = parseInt(anoInput);
    let km = parseInt(kmInput);

    vetmarca.push(marca)
    vetmodelo.push(modelo)
    vetano.push(ano)
    vetcor.push(cor)
    vetkm.push(km)
    vetfipe.push(fipe)
    console.log("Dados armazenados:", { vetmarca, vetmodelo, vetano, vetcor, vetkm, vetfipe });
    
    let resultado = document.getElementById("dados");
    resultado.innerHTML = "<h3>Veículos Cadastrados:</h3>";
    for (let i = 0; i < vetmarca.length; i++) {
        resultado.innerHTML += `
            <p><strong>Veículo ${i + 1}:</strong></p>
            <p>Marca: ${vetmarca[i]}</p>
            <p>Modelo: ${vetmodelo[i]}</p>
            <p>Ano: ${vetano[i]}</p>
            <p>Cor: ${vetcor[i]}</p>
            <p>KM: ${vetkm[i]}</p>
            <p>Preço FIPE: ${vetfipe[i]}</p>
            <hr>
        `;
    }
}
function anosUtilizacao(){
    if (ano === null || isNaN(ano)) { 
        alert("Cadastre um ano válido antes de ver os dados adicionais!");
        return;
    }
    let utilizado = 2025 - ano;
    document.getElementById("tempo").innerHTML = `
        <p>Veículo utilizado por : ${utilizado} anos</p>
    `;
};

function valorMercado(){
    if(fipe === null || isNaN(fipe)){
        alert('Adicione um valor compatível');
        return
    }
    let kmAtual = vetkm[vetkm.length - 1];
    if (kmAtual === undefined || isNaN(kmAtual)) {
        alert('Não há quilometragem cadastrada.');
        return;
    }

    let valor_fipe;
    if (kmAtual <= 30000) {
        valor_fipe = 1.1 * fipe;
    } else if (kmAtual > 30000 && kmAtual <= 50000) {
        valor_fipe = 1.0 * fipe;
    } else {
        valor_fipe = 0.9 * fipe;
    }

    document.getElementById("valores").innerHTML = `
        <p>O valor de mercado baseado na sua quilometragem é de: R$ ${valor_fipe.toFixed(2)}</p>
    `;
}