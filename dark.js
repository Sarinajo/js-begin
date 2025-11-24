const button = document.querySelector('#btn');
const body = document.body;

function changemode(){
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        button.textContent = "switch to light mode";

    }
    else{
        button.textContent ="switch to dark mode";
    }
}

button.addEventListener('click',changemode);
