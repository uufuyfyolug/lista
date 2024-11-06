let muda1 = muda1.document.getElementById('um')
let muda2 = muda2.document.getElementById('dois')
let muda3 = muda3.document.getElementById('tres')

  // Função para alternar a cor de um quadrado entre duas cores
function trocaCor(cor, cor1, cor2){
    cor.style.backgroundColor =
    cor.style.backgroundColor === cor1 ? cor2 : cor1;
}


muda1.addEventListener('click', function(){
    toggleColor(this, "red", "yellow");
})
muda2.addEventListener('click', function(){
    toggleColor(this, "pink", "green");
})
muda3.addEventListener('click', function(){
    toggleColor(this, "purple", "black");
})




