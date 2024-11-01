let contador = 0;
let clicks
let resetar
let diminuir

clicks = document.getElementById('clicks').addEventListener('click', function contarClicks(){
    contador++
    document.getElementById('mostrarClicks').innerText = contador;
})
resetar = document.getElementById('resetar').addEventListener('click',function resetarContador(){
    contador = 0;
    document.getElementById('mostrarClicks').innerText = contador;
})
diminuir = document.getElementById('diminuir').addEventListener('click', function(){
    contador--
    document.getElementById('mostrarClicks').innerText = contador;
})