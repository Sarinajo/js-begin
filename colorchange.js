const box = document.querySelector('#color-box');
const btn = document.querySelector('#toggle-btn');

function changeColor(){
    box.classList.toggle('red');
    if(box.classList.contains('red')){
        btn.textContent = 'Change to blue';
    }
    else{
        btn.textContent = 'change to red';
    }
}

btn.addEventListener('click',changeColor);