// script.js
const btn = document.querySelector('#revealbtn');
const container = document.querySelector('.container');

function toggle(){
    container.classList.toggle('active');
}
btn.addEventListener('click', toggle);