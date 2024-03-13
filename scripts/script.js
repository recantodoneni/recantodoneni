let ondeComer = document.querySelector(".ondeComer") 

function activeCo(seletor) {
    const element = document.querySelector(seletor);
    this.ativo = function(classe) {
        element.addEventListener('click',() =>  { ondeComer.classList.add(classe)})
    }
}

function inactiveCO(seletor) {
    const element = document.querySelector(seletor)
    this.inativo = function(classe) {
    element.addEventListener('click',() => { ondeComer.classList.remove(classe)})
} 
}

const comer1 = new activeCo('#co');
const close1 = new inactiveCO('#close')
comer1.ativo('ativo');
close1.inativo('ativo');


const d = new Date()
// Variável que concatena o ano com o texto do rodapé
const recanto = `Recanto do Neni. ` + d.getFullYear() + ` Todos os direitos reservados©.`;

// Texto + ano rodapé
date.innerHTML = recanto;



