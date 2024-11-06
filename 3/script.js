let mostrar = document.getElementById('botao')
mostrar.addEventListener('click', function(){
    let testo = document.getElementById('texto')
    if (texto.style.color == "white") {
        botao.innerText = 'ocultar'
        texto.style.color = 'black' 
        
    }else{
        texto.style.color = 'white'
        botao.innerText ='mostrar'
    }
})