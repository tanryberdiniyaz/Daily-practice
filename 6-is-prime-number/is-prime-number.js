const inputEl = document.querySelector("#num");
const resultEl = document.querySelector("#result")

function control() {
    const result = isPrime(+inputEl.value);

    if (result === "error") {
        inputEl.value = "";
        inputEl.focus();
        resultEl.innerHTML = `<span style="color:red"> *Lütfen geçerli sayı giriniz</span>`
    }else{

         resultEl.innerText = 
        `Girmiş olduğunuz sayı ${ result ? "asal sayıdır" : "asal sayı değildir"} `
    }
}


function isPrime(sayi){
    if (sayi < 2 || isNaN(sayi) || !sayi){
        return "error"
    }
    if (sayi === 2){
        return true;
    }
    if(sayi % 2 === 0){
        return false;
    }
   
    let squareRoot = Math.sqrt(sayi);
    for(let i = 3; i <= squareRoot; i += 2){
        if(sayi % i === 0){
            return false
        }
    }
    return true;
}
