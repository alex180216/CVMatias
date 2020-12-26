let controlNext = document.querySelector('.next');
let controlPrev = document.querySelector('.preview');
let opiniones = document.querySelectorAll('.opinion-item');

let i = 0;
controlNext.addEventListener('click', () =>{

    if(i < opiniones.length-1){
        i++;
        opiniones[i-1].classList.add('d-none');
        opiniones[i].classList.remove('d-none');
    }
})

controlPrev.addEventListener('click', () =>{
    if(i > 0){
        i--;
        opiniones[i+1].classList.add('d-none');
        opiniones[i].classList.remove('d-none');
    }
})

