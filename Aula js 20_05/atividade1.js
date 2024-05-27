let cotDolar = document.querySelector("#cotDolar");
let btReajuste = document.querySelector("#btReajuste");
let h3resultado = document.querySelector("#h3resultado");

function reajusteDolar(){
 let valor1 = Number(cotDolar.value);

 // Reajuste 1%
 let reajuste1 = valor1 * 0.01

 //Reajuste 2%
 let reajuste2 = valor1 * 0.02

 //Reajuste 5%
 let reajuste3 = valor1 * 0.05

 //Reajuste 10%
 let reajuste4 = valor1 * 0.10

h3resultado.textContent = "Primeiro Reajuste" + (reajuste1 + valor1) + 
"Segundo Reajuste" + (reajuste2 + valor1)+
"Terceiro Reajuste" + (reajuste3 + valor1)+ 
"Quarto Reajuste" + (reajuste4 + valor1); 
 

}

 btReajuste.onclick = function(){
    reajusteDolar()
 }
