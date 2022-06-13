function calcula(){
    let p = document.createElement("p")
    let texto_cem
    let texto_cinquenta
    let texto_vinte
    let texto_dez
    let texto_cinco
    let texto_dois
    let texto_um
    let preço_string = document.getElementById("preço")
    let preço = Number(preço_string.value)
    
    let notas_cem = (preço - (preço%100))/100

    preço = preço%100
    
    let notas_cinquenta = (preço - (preço%50))/50

    preço = preço%50

    let notas_vinte = (preço - (preço%20))/20

    preço = preço%20

    let notas_dez = (preço - (preço%10))/10

    preço = preço%10

    let notas_cinco = (preço -(preço%5))/5

    preço = preço%5

    let notas_dois = (preço - (preço%2))/2

    preço = preço%2

    let moedas_um = (preço -(preço%1))/1

    if (notas_cem > 0){
        texto_cem = document.createTextNode(`A quantidade de notas de cem será: ${notas_cem}`)
        p.appendChild(texto_cem)
        p.appendChild(document.createElement("br"))
    }
    if (notas_cinquenta > 0){
        texto_cinquenta = document.createTextNode(`A quantia de notas de cinquenta será: ${notas_cinquenta}`)
        p.appendChild(texto_cinquenta)
        p.appendChild(document.createElement("br"))
    }
    if (notas_vinte > 0){
        texto_vinte = document.createTextNode(`A quantia de notas de vinte será: ${notas_vinte}`)
        p.appendChild(texto_vinte)
        p.appendChild(document.createElement("br"))
    }
    if (notas_dez > 0){
        texto_dez = document.createTextNode(`A quantia de notas de dez será: ${notas_dez}`)
        p.appendChild(texto_dez)
        p.appendChild(document.createElement("br"))
    }
    if (notas_cinco > 0){
        texto_cinco = document.createTextNode(`A quantia de notas de cinco será: ${notas_cinco}`)
        p.appendChild(texto_cinco)
        p.appendChild(document.createElement("br"))
    }
    if (notas_dois > 0){
        texto_dois = document.createTextNode(`A quantia de notas de dois será: ${notas_dois}`)
        p.appendChild(texto_dois)
        p.appendChild(document.createElement("br"))
    }
    if (moedas_um > 0){
        texto_um = document.createTextNode(`A quantia de moedas de um será: ${moedas_um}`)
        p.appendChild(texto_um)
        p.appendChild(document.createElement("br"))
    }
    document.body.appendChild(p)
    

    
    
}