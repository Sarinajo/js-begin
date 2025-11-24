const input = document.querySelector('#movie');
const btn = document.querySelector('#addbtn');
const movie = document.querySelector('#movies');

btn.addEventListener('click',()=>{
    const text = input.value.trim();
    if(text === "")return;

    const li = document.createElement('LI');
    li.innerText = text;

     const removebtn = document.createElement('button');
    removebtn.innerText = 'remove';
    removebtn.classList.add('remove-btn');

    li.appendChild(removebtn);
    movie.appendChild(li);
    input.value = "";
});

movie.addEventListener('click',(e)=>{
    if(e.target.classList.contains('remove-btn')){
        const li = e.target.parentElement;
        movie.removeChild(li);
    }

});