function parOuImpar(){
    let num = document.getElementById("numero");
    
    if (num[0] % 2 === 0){
        alert("Par");
    }
    else{
        alert("Impar")
    }
}