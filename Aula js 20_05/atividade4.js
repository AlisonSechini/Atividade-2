let refriQuantia = document.querySelector("#refriQuantia");
let btresultado = document.querySelector("#btresultado");
let h3sabor = document.querySelector("#h3sabor");
let h3preco = document.querySelector("#h3preco");

function saboresEscolhidos(){
    let primeiroSabor = document.querySelector("#primeiroSabor").value;
    let segundoSabor = document.querySelector("#segundoSabor").value;
    let terceiroSabor = document.querySelector("#terceiroSabor").value;
    let quartoSabor = document.querySelector("#quartoSabor").value;

    let saboresP = primeiroSabor + ", " + segundoSabor + ", " + terceiroSabor + ", " + quartoSabor;
    h3sabor.textContent = "Os sabores escolhidos foram os seguintes: " + saboresP;
}

function valorFinal(){
    let valorPizza = 12;
    let valorBebida = 7 * (refriQuantia.value);
    let resultadoCompra = (valorPizza * 4) + valorBebida;
    h3preco.textContent = "O total em reais é de : " + resultadoCompra;
}



btresultado.onclick = function(){
    saboresEscolhidos();
    valorFinal();
}