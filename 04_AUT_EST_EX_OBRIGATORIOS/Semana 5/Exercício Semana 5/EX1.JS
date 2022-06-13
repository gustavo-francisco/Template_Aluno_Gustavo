let botoes = document.querySelectorAll("button");

botoes.forEach((botao) => {
    botao.addEventListener("click", function () {
        
        let primeiro = parseInt(document.getElementById("primeiro").value)
        let segundo = parseInt(document.getElementById("segundo").value)
        let tipoBotao = botao.id;
        
        let resultado;
        let span = document.createElement("span");
        let text;

        
        switch(tipoBotao){
            case 'soma':
                resultado = primeiro + segundo;
                text = document.createTextNode(`${primeiro} + ${segundo} = ${resultado}`)
            break
            case 'subtracao':
                resultado = primeiro - segundo;
                text = document.createTextNode(`${primeiro} - ${segundo} = ${resultado}`)
            break
            case 'multiplicacao':
                resultado = primeiro * segundo;
                text = document.createTextNode(`${primeiro} * ${segundo} = ${resultado}`)
            break
            case 'divisao':
                resultado = primeiro / segundo;
                text = document.createTextNode(`${primeiro} / ${segundo} = ${resultado}`)
            break
            case 'divisao-inteira':
                resultado = Math.floor(primeiro / segundo);
                text = document.createTextNode(`${primeiro} // ${segundo} = ${resultado}`)
            break
            default:
                resultado = primeiro % segundo;
                text = document.createTextNode(`${primeiro} % ${segundo} = ${resultado}`)
        }

        span.appendChild(text)

        document.body.appendChild(span);

    })
})

