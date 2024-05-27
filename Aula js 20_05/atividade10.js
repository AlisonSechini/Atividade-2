let valorVendas = document.querySelector("#valorVendas");
let metaMinima = document.querySelector("#metaMinima");
let metaFinal = document.querySelector("#metaFinal");
let btResultado = document.querySelector("#btResultado");
let h3minima = document.querySelector("#h3minima");
let h3final = document.querySelector("#h3final");
let h3resultado = document.querySelector("#h3resultado")

function metaAtingida(){
    if (parseFloat(valorVendas) >= parseFloat(metaMinima)){
        alert("A meta minima foi atingida");
    }else
        alert("A meta minima não foi atingida");
}

function metaMaxima(){
    if (parseFloat(valorVendas) >= parseFloat(metaFinal)){
        alert("A meta foi atingida")
    }else
        alert("A meta não foi atingida");
}

function porcentagens(){
    let porcentoMinima = (parseFloat(valorVendas / metaMinima)) * 100;
    let porcentoMeta = (parseFloat(valorVendas / metaFinal)) * 100;
    let resultado1 = "A porcentagem de atingimento da meta mínima é de: " + porcentoMinima;
    let resultado2 = "A porcentagem de atingimento da meta é de: " + porcentoMeta;
    h3resultado.textContent = resultado1 + ", " + resultado2;
}

btResultado.onclick = function(){
    valorVendas = document.querySelector("#valorVendas").value;
    metaMinima = document.querySelector("#metaMinima").value;
    metaFinal = document.querySelector("#metaFinal").value;
    metaAtingida();
    metaMaxima();
    porcentagens();
}