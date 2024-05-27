let nPessoas = document.querySelector("#nPessoas");
let btVerifica = document.querySelector("#btVerifica");
let h2resultado = document.querySelector("#h2resultado");

function ingredientesPessoas(){
    valorPessoas = Number(nPessoas.value)

    let valorOvos = valorPessoas * 2;
    let valorQueijos = valorPessoas * 50;

    let totalOvos = nPessoas + valorOvos;
    let totalQueijo = nPessoas + valorQueijos;

    h2resultado.textContent = "o total de ovos e queijo em gramas " + (valorOvos + valorQueijos);
}

btVerifica.onclick = function(){
    ingredientesPessoas();
}
