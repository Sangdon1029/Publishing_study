const indicator = document.querySelector('.indicator');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
prev.addEventListener('click',()=>{
    indicator.classList.add('left');
    indicator.classList.remove('right');
})
next.addEventListener('click',()=>{
    indicator.classList.add('right');
    indicator.classList.remove('left');
})

