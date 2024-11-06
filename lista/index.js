let contador = 0; // crei a variavel que vai contar os clicks
let clicks // variavel que mostra os clicks
let resetar //variavel que reseta a contagem de clicks
let diminuir

clicks = document.getElementById('clicks').addEventListener('click', function contarClicks(){ //ele acessa o id do button e add um evento onde o ontador soma cada click
    contador++
    document.getElementById('mostrarClicks').innerText = contador;
})
resetar = document.getElementById('resetar').addEventListener('click',function resetarContador(){
    contador = 0; //quase o mesmo de cima so que quando aperta ele reseta o contador em 0
    document.getElementById('mostrarClicks').innerText = contador;
})
diminuir = document.getElementById('diminuir').addEventListener('click', function(){
    contador--
    document.getElementById('mostrarClicks').innerText = contador;
})