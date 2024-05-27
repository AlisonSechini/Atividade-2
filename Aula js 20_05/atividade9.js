let numeroAlunos = document.querySelector("#numeroAlunos");
let quantiaSalas = document.querySelector("#quantiaSalas");
let btResultado = document.querySelector("#btResultado");
let resultadoUm = document.querySelector("#resultadoUm");
let resultadoDois = document.querySelector("#resultadoDois");

function alunosSalas(){
    let nAlunos = Number(numeroAlunos.value);
    let nSalas = Number(quantiaSalas.value);
    let resultado = (nAlunos / nSalas);
    resultadoUm.textContent = ("O numero de alunos por sala eh de " + resultado);

    let semTurma = (nAlunos % nSalas);
    resultadoDois.textContent = ("O numero de alunos sem turma eh de " + semTurma);
}

btResultado.onclick = function(){
    alunosSalas();
}