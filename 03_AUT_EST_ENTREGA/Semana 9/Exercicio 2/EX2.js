
function calculo(){
    let num = document.getElementById("numero").value;
    if(parseInt(num)>0){
        let resultado = document.getElementById("resultado");
        num=num.split("");
        let soma = 0;
        for (i=0; i<num.length; i++){
            soma += parseInt(num[i]);
    };
    resultado.innerHTML = "A soma dos algaritimos é = " + soma;
}
      
    else {
            resultado.innerHTML = "Tem que ser números positivos cria"
        };
    };


