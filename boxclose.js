const btn = document.querySelector('#btn');
const text = document.querySelector('#text');

btn.addEventListener('click',()=>{
    if(text.innerText=="Hello"){
        text.innerText ="i can change";
        text.style.color ='black';
    }
    else{
        text.innerText = "Hello";
        text.style.color ='blue';
    }
});
//text.innerText = text.innerText ==="Hello" ? "I can change":"Hello";