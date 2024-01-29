// Seleciona o id aibnb no html
let ab = document.getElementById("airbnb");
// Seleciona o id whats no html
let wp = document.getElementById("whats");
// Seleciona o id date no html
let date = document.getElementById("date");
let p = document.getElementById("point");
let ev = document.getElementById("event");
let lo = document.getElementById("loc");

// Variável que possui o link do aibnb
let linkAB = '<a href="https://www.airbnb.com/h/recantodoneni" target="_blank"><img src="img/airbnb.png" alt="airbnb">Faça a sua reserva</a>';
// Variável que possui o link do whatsapp
let linkW = '<a href="https://wa.me/555198328660/?" target="_blank"><img src="img/whatsapp.png" alt="whatsapp">Fale conosco</a>';
// Variável que chama a data
let local = '<a href="https://maps.app.goo.gl/uqn7LPWrEzZ5YzVFA" target="_blank"><img src="img/localizacao.png" alt="">Localização</a>';
let point = '<a href="https://www.santamariadoherval.rs.gov.br/index.php/turismo/pontos-turisticos/570" target="_blank"><img src="img/camera.png" alt="">Pontos Turísticos</a>'


let evt = '<a href="https://www.santamariadoherval.rs.gov.br/eventos" target="_blank"><img src="img/calendar.png" alt="">Eventos</a>'


let d = new Date()
// Variável que concatena o ano com o texto do rodapé
let recanto = `Recanto do Neni. ` + d.getFullYear() + ` Todos os direitos reservados©.`;

// Insere as informações no html
// Link airbnb
ab.innerHTML = linkAB
// Link whats
wp.innerHTML = linkW
lo.innerHTML = local
p.innerHTML = point
ev.innerHTML = evt
// Texto + ano rodapé
date.innerHTML = recanto;