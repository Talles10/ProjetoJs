let alunoBotao = document.getElementById("aluno");
let professorBotao = document.getElementById("professor");
let area = document.getElementById("campoarea");
let matricula = document.getElementById("matricula");
let lattes = document.getElementById("campolattes");
let curso = document.getElementById("campocurso");
curso.style.display = "none";
function atualizarForm(){
if (alunoBotao.checked){
    curso.style.display = "block";
    lattes.style.display = "none";
    area.style.display = "none";}}
function reverterForm(){
    if(professorBotao.checked){
        curso.style.display = "none";
        lattes.style.display = "block";
        area.style.display = "block";}
}
alunoBotao.addEventListener("change", atualizarForm);
professorBotao.addEventListener("change", reverterForm);