let ondeComer = document.querySelector(".ondeComer") 

function activeCo(seletor) {
    const element = document.querySelector(seletor);
    this.ativo = function(classe) {
        element.addEventListener('click',() =>  { ondeComer.classList.toggle(classe)})
    }
}

const comer1 = new activeCo('#co');
const close1 = new activeCo('#close')
comer1.ativo('ativo');
close1.ativo('ativo');


const d = new Date()
// Variável que concatena o ano com o texto do rodapé
const recanto = `Recanto do Neni. ` + d.getFullYear() + ` Todos os direitos reservados©.<br> Desenvolvido por <a href="https://github.com/jcblank" target="_blank">João Carlos Rodrigues.</a>`;

// Texto + ano rodapé
date.innerHTML = recanto;



