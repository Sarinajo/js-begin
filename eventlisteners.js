const button = document.querySelector('.btn2');
function click(){
    alert('i love puntu too');

}
//syntax ;- element.addEventListener("click",function);
button.addEventListener("click",click); //don't write click(),it will cal the function immediately. instead write just click.

//mouseover
const div = document.querySelector('.box-3');
function onmouse(){
    div.style.backgroundColor = 'red';
}
div.addEventListener("mouseover",onmouse);
div.addEventListener("mouseout",()=> div.style.backgroundColor ="");

//button to reveal text
 const revealbtn = document.querySelector('.reveal-btn');
 const hiddencontent = document.querySelector('.hidden-content');

 function revealcontent(){
 hiddencontent.classList.toggle('reveal-btn');
 }
 revealbtn.addEventListener("click",revealcontent);
