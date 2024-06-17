//=======================
// QUERY SELECTOR BASICS:
//=======================

// To access the text displayed on webpage in an element (wont show anything hidden by display:none)
const ptext = document.querySelector('p').innerText; // you can also update this value
// document.querySelector('p').innerText = 'lololol';

// To access all the text and even hidden stuff (basically every text in the html markup):
const ptext2 = document.querySelector('p').textContent; // this can also be updated

// To access all the html markup (with the syntax and everything):
const htext = document.querySelector('p').innerHTML; // we can even update the html markup using this
document.querySelector('h1').innerHTML += '<sup><b><i>lol</i></b></sup>'; // superscript | bold | italic

//======================
// ACCESSING ATTRIBUTES:
//======================

const imgId = document.querySelector('#banner').id; // this can also be modified

const firstLink = document.querySelector('a');
console.log(firstLink.href);
console.log(firstLink.getAttribute('href')) // this will return whatever was written in the html markup

firstLink.setAttribute('href', 'http://www.google.com');
// firstLink.href = 'http://www.google.com' this also does the same thing

//======================
// MANIPULATING STYLES:
//======================

const h1 = document.querySelector('h1');
h1.style.color; // This only has info on INLINE styles and not any styles defined in the CSS style sheet
h1.style.fontSize = '3em'; // This will set the inline style and not change the css sheet.

const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.style.color = 'rgb(0,108,134)';
    link.style.textDecorationStyle = 'wavy';
}

// To access the css style after the whole page has been loaded:
// console.log(window.getComputedStyle(h1));
console.log(window.getComputedStyle(h1).fontFamily);

// To access the classes of any element
const h2 = document.querySelector('h2');
console.log(h2.classList);
h2.classList.add('purple');
h2.classList.add('border');
h2.classList.remove('border');
h2.classList.contains('purple');
h2.classList.toggle('border');

//===========================
// ACCESSING FAMILY ELEMENTS: (like parent etc.)
//===========================

const secBold = document.querySelector('b:nth-of-type(2)');
console.log(secBold.parentElement.parentElement);
console.log(h1.childElementCount);
console.log(h1.children);

console.log(secBold.nextSibling); // nextSibling and previousSibling will give us a node not an element 
// which will include all the whitespaces that browser adds by default and not just the html markup
console.log(secBold.nextElementSibling);

//===========================
// CREATING NEW DOM ELEMENTS:
//===========================

const newImg = document.createElement('img');
newImg.src = 'https://plus.unsplash.com/premium_photo-1664640733639-ba75346e87e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8';
document.body.appendChild(newImg); // Can only insert one at a time, also cannot add to existing stuff

// To add stuff to existing stuff:
const newB = document.createElement('b');
const p1 = document.querySelector('p');
newB.append('I AM NEW '); // can take multiple values at a time
p1.prepend(newB);

h1.insertAdjacentElement('afterend',newB); // afterbegin | beforebegin | beforeend
// h1.after(newB); does the same thing as above
// h1.before(newB);

//===================
// REMOVING ELEMENTS:
//===================

const firstLi = document.querySelector('li');
const thirdLi = document.querySelector('li:nth-of-type(3)');
const parentUl = firstLi.parentElement;

parentUl.removeChild(firstLi); // to remove the element you have to also access its parent which is annoying

thirdLi.remove(); // No need to access the parent