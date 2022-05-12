function conta (){
var gravidade = 10
var vo = document.getElementById("velocidade")
var valor = vo.value
var resultado = document.getElementById("resultado")
var tempo = valor/gravidade
var altura = (valor*valor)/(2*gravidade)
resultado.innerHTML=`O resultado é ${tempo}, ${altura}`
}