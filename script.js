// Seleciona o id aibnb no html
let ab = document.getElementById("airbnb");
// Seleciona o id whats no html
let wp = document.getElementById("whats");
// Seleciona o id date no html
let date = document.getElementById("date");
let p = document.getElementById("point");
// Variável que possui o link do aibnb
let linkAB = '<a href="https://www.airbnb.com/h/recantodoneni" target="_blank"><img src="airbnb.png" alt="airbnb">Faça a sua reserva</a>';
// Variável que possui o link do whatsapp
let linkW = '<a href="https://wa.me/5551992887129/?" target="_blank"><img src="whatsapp.png" alt="whatsapp">Fale conosco</a>';
// Variável que chama a data
let point = '<a href="https://www.santamariadoherval.rs.gov.br/index.php/turismo/pontos-turisticos/570" target="_blank"><img src="" alt="">Pontos Turísticos</a>'
let d = new Date()
// Variável que concatena o ano com o texto do rodapé
let recanto = `Recanto do Neni. ` + d.getFullYear() + ` Todos os direitos reservados©.`;

// Insere as informações no html
// Link airbnb
ab.innerHTML = linkAB
// Link whats
wp.innerHTML = linkW
p.innerHTML = point
// Texto + ano rodapé
date.innerHTML = recanto;