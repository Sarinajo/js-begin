const main = document.querySelector("#main-heading");
main.style.color = 'red';

//when trying to add styling to multiple tags at once we need to use loop else we won't be able to do so.





const items = document.querySelectorAll('.lists-items');
for(i=0;i<items.length;i++){
    items[i].style.color ='orange';

}

//creating elements
const ul = document.querySelector('ul');
const li = document.createElement('li');

//adding elements

ul.append(li);

//INCLUDING element
li.innerText = 'X-men'; 
//li.setAttribute('class', 'list-items');
li.classList.add('list-items');
//li.classList.remove('list-items');
console.log(li.classList.contains('list-items'));
li.remove();

const listItem = document.querySelectorAll('.list-items');

for(i=0; i<listItem.length ;i++){
    listItem[i].style.color = 'red';
    listItem[i].style.fontSize ='2rem';
}
console.log(listItem);
//modifying the text elements

const firstitem = document.querySelector('.list-items');
console.log(firstitem.innerText);
console.log(firstitem.innerHTML);
console.log(firstitem.textContent);

 