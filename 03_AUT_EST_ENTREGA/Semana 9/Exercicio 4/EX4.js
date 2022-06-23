function fibonacci(){
    document.getElementById("resultado").innerHTML = "";
    var lim = document.getElementById("limite").value;
    var fibas = [1,1];
  
    for (i = 1; i <=parseInt(lim); i++) {
      fibas.push(fibas[i] + fibas[i - 1]);
    };
   for(i=0; i<parseInt(lim); i++){
    document.getElementById("resultado").innerHTML += fibas[i] ;
   };
};