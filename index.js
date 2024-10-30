let corfixa = document.getElementById('um');
let corAtual = 'purple'
var cores = ['green', 'yellow']
let mudaCor = document.getElementById('dois', 'tres')
corfixa.addEventListener('click', function(){
    let mudaCor = document.getElementById('dois')
    um.style.backgroundColor =corAtual
    dois.style.backgroundColor =cores[1]? cores[0] : cores[1]
    tres.style.backgroundColor = cores[0]? cores[1] : cores[0]
})
