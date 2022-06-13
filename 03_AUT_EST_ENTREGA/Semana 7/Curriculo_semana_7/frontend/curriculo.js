function abreLinkedin(){
    window.open('https://www.linkedin.com/in/gustavo-pereira1/', '_blank')
}

$(document).ready(function () {
    $("#botao1").click(function(){
        console.log("clicou");
        $("button").addClass("blue");
    });
})