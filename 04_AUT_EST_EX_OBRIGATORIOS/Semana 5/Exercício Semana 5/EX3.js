function arranjaLista(){
    let lista = document.getElementById("numeros").value
    let converte_lista = lista.split(',')
    let valor_foco = document.getElementById("vf").value
    let indice_vf
    let span = document.createElement("span")
    let text
    

        for (let i = 0; i < converte_lista.length; i++) {
            for(let j=0; j <converte_lista.length -(i-1); j++){ 
                if(converte_lista[j]> converte_lista[j+1]){
                   let temp = converte_lista[j+1];
                    converte_lista[j+1] = converte_lista[j];
                    converte_lista[j] = temp;
                    
                }
            }
        }
        buscaBinária().ready
     text = document.createTextNode(`Sua lista ordenada de forma crescente é ${converte_lista}`)
     span.appendChild(text)
     span.appendChild(document.createElement("br"))
     document.body.appendChild(span)
        
}


function buscaBinária(){
    let lista = document.getElementById("numeros").value
    let converte_lista = lista.split(',')
    let valor_foco = document.getElementById("vf").value
    let inicio = 1;
    let final = converte_lista.length;
    let span = document.createElement("span")
    let text

    while (inicio <= final) {
        
        let meio = Math.floor((inicio + final) / 2);

        if (converte_lista[meio] === valor_foco) {
         text = document.createTextNode(`O índice do seu valor foco é ${meio}`)
         span.appendChild(text)
         span.appendChild(document.createElement("br"))
         document.body.appendChild(span)
         return meio
        } else if (converte_lista[meio] < valor_foco) {
            inicio = meio + 1;
         text = document.createTextNode(`O índice do seu valor foco é ${inicio}`)
         span.appendChild(text)
         span.appendChild(document.createElement("br"))
         document.body.appendChild(span)
        } else{
            final = meio - 1
        text = document.createTextNode(`O índice do seu valor foco é ${final}`)
        span.appendChild(text)
        span.appendChild(document.createElement("br"))
        document.body.appendChild(span)
        }
        return -1
        }
    }
           
    function holder(){
        arranjaLista().ready
        buscaBinária().ready
    }
    
    
