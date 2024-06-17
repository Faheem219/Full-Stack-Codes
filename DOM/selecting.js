const banner = document.getElementById('banner');

// This will return an html collection of all <img></img>
const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

// querySelector is an all-in-one method to select a single element (first matching one):
const banner2 = document.querySelector('#banner');
const square = document.querySelector('.square')
const p = document.querySelector('p');
const p2 = document.querySelector('p:nth-of-type(2)');

// querySelectorAll will return a html collection of all matching elements
const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}