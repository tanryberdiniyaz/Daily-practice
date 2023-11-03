function showOnDisplay(value) {
    document.getElementById("display").value += value;
}

function clean(){
    document.getElementById("display").value = "";

}

function calculate(){
   
    const display =  document.getElementById("display").value;
    
    try {
        const result = eval(display);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Hata"
    }
}


