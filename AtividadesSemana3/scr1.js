let objetos = [];
function adobjeto(){
    let input = document.getElementById("objeto");
    let valor = input.value.trim();
    if (valor !== "" && !objetos.includes(valor.toLowerCase())) { 
        objetos.push(valor);
        objetos.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }));
        dinamizar();
} input.value = ""}
function dinamizar() 
    {   let listaordenada = document.getElementById("listaordenada");
    listaordenada.innerHTML = ""
    for (let objeto of objetos) 
    {   let item = document.createElement("li");
        item.textContent = objeto;
        listaordenada.appendChild(item);}}