function abreLinkedin(){
    window.open('https://www.linkedin.com/in/gustavo-pereira1/', '_blank')
}

$(document).ready(function () {
    $("#botao1").click(function(){
        console.log("clicou");
        $("button").addClass("blue");
    });
})

var getDBResDiv = "#getDB"
/* Função que faz uma requisição GET */
function TestGETDB(){
    var url = "http://127.0.0.1:3061/formacoes";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);
    
    $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
    $(getDBResDiv).append("<br /><br />* Seleção do atributo 'title' do primeiro usuario:<br />" + resposta[0].title);
    //console.log(xhttp.responseText);
}