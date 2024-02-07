let d = new Date()
// Variável que concatena o ano com o texto do rodapé
let recanto = `Recanto do Neni. ` + d.getFullYear() + ` Todos os direitos reservados©.`;

// Insere as informações no html

// Texto + ano rodapé
date.innerHTML = recanto;
