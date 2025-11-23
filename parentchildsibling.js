let ul = document.querySelector('ul');

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

//so when we do ul.firstchild/lastchild it returns text. which we can't really operate on so instead we use

ul.childNodes[1].style.backgroundColor ='blue';
ul.childNodes[3].style.backgroundColor = 'red';

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

///sibling. so like above there is nextsibling, previous sibling and nextelementsibling and previouselementsibling

console.log(ul.previousElementSibling);
let li =document.querySelector('li');


console.log(li.nextElementSibling);
console.log(li.previousElementSibling);

let div =document.querySelector('div');
console.log(div.previousElementSibling);
console.log(div.nextElementSibling);