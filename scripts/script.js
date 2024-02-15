let comer = document.getElementById("co")
let c123 = document.getElementById("co1") 
let cl = document.getElementById("close")

comer.addEventListener("click", function comer() { 
    c123.style.display = "flex"
    c123.style.position = "fixed"
})

cl.addEventListener("click", function close(){
    c123.style.display = "none"
})

let d = new Date()
// Variável que concatena o ano com o texto do rodapé
let recanto = `Recanto do Neni. ` + d.getFullYear() + ` Todos os direitos reservados©.`;

// Insere as informações no html

// Texto + ano rodapé
date.innerHTML = recanto;
