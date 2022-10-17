const nextEl=document.querySelector('.btn-warning');
const prevEL=document.querySelector('.btn-info');
const ladoAEl=document.getElementById('lado-a');
const ladoBEl=document.getElementById('lado-b');
nextEl.addEventListener('click',()=>{
    ladoAEl.classList.remove('show');
})
prevEL.addEventListener('click',()=>{
    ladoAEl.classList.add('show')
})