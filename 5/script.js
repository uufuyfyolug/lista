let mensagem = document.getElementById('mensagem');


let evento = document.getElementById('mensagem')
evento.addEventListener('keydown', function(event){
   document.getElementById('mensagem').innerText = `Você pressionou: ${event.key}`
})