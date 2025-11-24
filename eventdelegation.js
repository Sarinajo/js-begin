const sports = document.querySelector('#sports');
const input =document.querySelector('#text-input');
const btn = document.querySelector('#btn');

//adding element and rmeove button
btn.addEventListener('click',()=>{
    const text = input.value.trim();
    if(text === "")return;

    const li = document.createElement('li');
    li.innerText = text;


    sports.appendChild(li);
    input.value ="";

});

//deleting element
sports.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})