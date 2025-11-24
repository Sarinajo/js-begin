const outer = document.querySelector('.outer');
const middle = document.querySelector('.middle');
const inner = document.querySelector('.inner');
const btn =document.querySelector('.button');
//capturing
outer.addEventListener('click',()=>console.log("outer(capturing)"),true);
middle.addEventListener('click',()=>console.log("middle(capturing)"),true);
inner.addEventListener('click',()=>console.log('inner(capturing)'),true);
btn.addEventListener('click',(e)=>{
    console.log("button capturing")
},true);
//bubbling
outer.addEventListener('click',()=> console.log("outer(bubbling)"));
middle.addEventListener('click',()=>console.log('middle(bubbling)'));
inner.addEventListener('click',()=>console.log('inner(bubbling'));
btn.addEventListener('click',(e)=>console.log("btn bubbling"));
