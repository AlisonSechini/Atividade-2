let numeroInteiro1 = document.querySelector("#numeroInteiro1");
let numeroInteiro2 = document.querySelector("#numeroInteiro2");
let btContas = document.querySelector("#btContas");
let h2Resultado = document.querySelector("#h2Resultado");

function contas(){
    let valorInteiro1 = Number(numeroInteiro1.value);
    let valorInteiro2 = Number(numeroInteiro2.value);

    //Soma
    let somaValores = valorInteiro1 + valorInteiro2;
    alert("A soma dos valores eh " + somaValores)

    //Subtração
    let subValores = valorInteiro1 - valorInteiro2;
    alert("A sub dos valores eh " + subValores)

    //Multiplicação 
    let multiValores = valorInteiro1 * valorInteiro2;
    alert("A multiplicacao dos valores eh " + multiValores)

    //Divisão
    let divValores = valorInteiro1/valorInteiro2;
    alert("A divisao dos numeros eh " + divValores)

}

btContas.onclick = function(){
    contas();
}