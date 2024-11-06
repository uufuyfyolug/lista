let alteraTexto = document.getElementById('altera')
alteraTexto.addEventListener('click', function(){
    let text= document.getElementById('texto')
    let novoTexto = prompt("escreva um novo texto")
    text.innerText = novoTexto
})