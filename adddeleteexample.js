const input =document.querySelector('#dogs');
const btn = document.querySelector('#addbtn');
const breed = document.querySelector('#breed');

btn.addEventListener('click',()=>{
    const text = input.value.trim();
    if(text === "")return;
    const li = document.createElement('LI');
    li.innerText = text;

    const remove = document.createElement('button');
    remove.innerText = 'remove';
    remove.classList.add('remove-btn');

    li.appendChild(remove);

    breed.appendChild(li);
    input.value ="";
});

breed.addEventListener('click',(e)=>{
  if(e.target.classList.contains('remove-btn')){
    const li = e.target.parentElement;
    breed.removeChild(li);

    }
});