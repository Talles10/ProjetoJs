let nome = [];
let email = [];
let data = [];
let tel = [];
let cel = [];
let area = [];
let matricula = [];
let lattes = [];
let professor = [];
let aluno = [];
function cadastrarproduto(){
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let data = document.getElementById("data").value.trim();
    let tel = document.getElementById("tel").value.trim();
    let cel = document.getElementById("cel").value.trim();
    let area = document.getElementById("area").value.trim();
    let matricula = document.getElementById("matricula").value.trim();
    let lattes = document.getElementById("lattes").value.trim();
    let professor = document.getElementById("professor").value.trim();
    let aluno = document.getElementById("aluno").value.trim();
}
function limpar(){
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("data").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("cel").value = "";
    document.getElementById("area").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("lattes").value = "";
    document.getElementById("professor").value = "";
    document.getElementById("aluno").value = "";
}
if(nome == "" || email == "" || data == "" || tel == "" || cel == "" || area == "" || matricula == "" || lattes == "" || professor == "" || aluno == ""){
    alert("Preencha todos os campos");
}else{
    alert("Cadastro realizado com sucesso");
}