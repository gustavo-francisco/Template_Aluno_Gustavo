function botaOrdem(){
    var letra1 = document.getElementById("1").value
    var letra2 = document.getElementById("2").value
    var letra3 = document.getElementById("3").value
    var resultado = document.getElementById("resultado")

    var array = []
    array.push(letra1, letra2, letra3)
    array.sort()

    resultado.innerHTML = `A ordem é: ${array[0]}, ${array[1]}, ${array[2]}`
}