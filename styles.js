// greet user function
function greet() {
    var time = new Date().getHours();
    if (time < 12){
        alert ('Good morning');
    }
    else if (time<19){
        alert('How is your day?');
    }
    else{
        alert('Good night!');
    }
}
greet();

//  Two divs into html
// 4th card
let container = document.querySelector('div.cards'); 
let newCard = document.createElement('div');
newCard.className = ('Client_01');
let heading = document.createElement('h3');
heading.textContent = ('John Doe');
let avatar = document.createElement('img');
avatar.src = 'John.jpg';
let about = document.createElement('p');
about.textContent = ('Hey! My name is John Doe. I speak English.');

 newCard.appendChild(heading);
 newCard.appendChild(avatar);
 newCard.appendChild(about);
 
 container.appendChild(newCard);
//  5th card
let contain = document.querySelector('div.cards'); 
var female=document.createElement('div');
female.className= ('Client_02');
var head = document.createElement('h3');
head.textContent=('Veronique Mulan');
let image = document.createElement('img');
image.src = 'Vero.jpg';
var info = document.createElement('p');
info.textContent=('Bonjour! My name is Veronique Mulan. I speak French.');
female.appendChild(head);
female.appendChild(image);
female.appendChild(info);
contain.appendChild(female);



