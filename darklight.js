// script.js

const togglebtn = document.querySelector('#mode-toggle-btn');
const body = document.body;


function toggleMode() {
    // 1. Toggle the 'dark-mode' class on the body element
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')){
        togglebtn.textContent = "switch to light mode";
    }
    else{
        togglebtn.textContent = "Switch to dark Mode";
    }

   
  
}

togglebtn.addEventListener('click', toggleMode);