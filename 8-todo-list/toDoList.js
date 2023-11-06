const notes = [
    "kitap oku",
    "koş",
    "yürü",
    "ödev yap"
];

const inputEl = document.getElementById("input");
const listEl = document.getElementById("list");
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");


let line = "";
notes.forEach((item)=>{
    line += `<li> ${item}</li>`
})
listEl.innerHTML = line;


addBtn.addEventListener("click",()=>{
    if(!inputEl.value){
        alert("Etkinlik ekle")
        inputEl.focus()
        return;
    }
   listEl.innerHTML+= `<li> ${inputEl.value}</li>`
   notes.push(inputEl.value)
   addCard(notes);
   inputEl.value = "";
   inputEl.focus()

})

deleteBtn.addEventListener("click",() => { 
    if(notes.length == 0){
        alert("Silinecek etkinlik kalmadı")
    }else{
        inputEl.value= "";
        notes.pop()
        listEl.removeChild(listEl.lastElementChild)
        addCard(notes)
    }
})

const addCard = (chosen) => {
    document.querySelector("#paragraph").innerText= chosen.join(" - ")
}