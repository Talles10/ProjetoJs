/*Implemente um formulario HTML para input das características de um
carro:
marca, modelo, ano, cor, kilometragem, valor_fipe
Implemente um script que armazene as características preenchidas no
formulário em um objeto e que contenha, além das propriedades acima, dois
métodos:
anosUtilizacao() – deve retornar quantos anos de utilização o veículo
possui;
valorMercado() – deve retornar o valor de mercado considerando a
seguinte regra:
carros que rodam até 30.000 km/ano – 110% do valor_fipe
carros que rodam entre 30.000 e 50.000 km/ano – 100% do valor_fipe
carros que rodam mais que 50.000 km/ano – 90% do valor_fipe
Preenchidos os campos os métodos criados devem ser utilizados para exibir
quantos anos o veículo tem de utilização juntamente com seu valor de
mercado.*/
let vetmarca = [];
let vetmodelo = [];
let vetano = [];
let vetcor = [];
let vetkm = [];
let vetfipe = [];
let ano = null;
function armazenar(){
    let marca = document.getElementById("marca").value.trim();
    let modelo = document.getElementById("modelo").value.trim();
    let anoInput = document.getElementById("ano").value.trim();
    let cor = document.getElementById("cor").value.trim();
    let km = document.getElementById("km").value.trim();
    let fipe = document.getElementById("fipe").value.trim();
    

    if (marca === "" || modelo === "" || ano === "" || cor === "" || km === "" || fipe === "") {
        alert('Para cadastrar, preencha todos os campos');
        return;
    }

    ano = parseInt(anoInput);

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