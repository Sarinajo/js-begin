const btn = document.querySelector('.menu-btn');
const dropdown = document.querySelector('.dropdown');

btn.addEventListener('click',()=>{
    dropdown.classList.toggle('hidden');
});

document.addEventListener('click',(e)=>{
    if(!dropdown.classList.contains(e.target)&& e.target != btn){
        dropdown.classList.add('hidden');
    }
});