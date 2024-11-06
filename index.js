let cor1 = document.getElementById('um')
let cor2 = document.getElementById('dois')
let cor3 = document.getElementById('tres')
cor1.addEventListener('click', function(){
    if (um.style.backgroundColor == "darkturquoise") {
        um.style.backgroundColor = 'pink' 
        
    }else{
        um.style.backgroundColor = 'darkturquoise'
    }

})
cor2.addEventListener('click', function(){
    if (dois.style.backgroundColor == 'red' ) {
        dois.style.backgroundColor = 'blue'
    }else{
        dois.style.backgroundColor = 'red' 
    }

})
cor3.addEventListener('click', function(){
    if(    tres.style.backgroundColor == 'mediumslateblue' ){
        tres.style.backgroundColor = 'aquamarine' 
    }else{
        tres.style.backgroundColor = 'mediumslateblue' 
    }

})