function confere(){
    var inicio = parseInt(document.getElementById('inicio').value);
    var final = parseInt(document.getElementById('final').value);
    var resultado = document.getElementById('resultado');
    var texto='';
    var divisores;

    for(var count=inicio ; count<=final ; count++){
        divisores=0;
        for(var aux=1 ; aux<=count ; aux++)
            if(count % aux == 0)
                divisores++;
  
        if(divisores==2)
            texto += count + '<br />';

    }

    resultado.innerHTML = texto;
  }