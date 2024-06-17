// ===========================
// KEYWORD EVENTS:
// ===========================

// capturing and displaying the event object that is created by default in an event function:
document.querySelector('button').addEventListener('click', function(evt){
    console.log(evt);
})

const input=document.querySelector('input');
// input.addEventListener('keydown',function(){
//     console.log('KEYDOWN'); // This doesnt just mean typing something, its clicking any key (cmd, shift, etc,)
// })

input.addEventListener('keydown',function(e){
    console.log(e.key); // Displays the key pressed (could be another language)
    console.log(e.code); // Displays the location of the pressed key
})

// window.addEventListener('keydown',function(e){ // For the whole webpage
//     switch(e.code){
//         case 'ArrowUp':
//             console.log("UP!");
//             break;
//         case 'ArrowDown':
//             console.log("DOWN!");
//             break;
//         default:
//             console.log("IGNORED!");
//     }
// })

// ===========================
// FORM EVENTS:
// ===========================

const form=document.querySelector('#shelterForm');
const catInput=document.querySelector('#catName');
const list=document.querySelector('#cats');

form.addEventListener('submit',function(e){
    e.preventDefault(); // Used to stop the form from changing the webpage and refreshing
    // can be used on other stuff as well, not just in forms but most commonly in forms
    const catName=catInput.value;
    catInput.value='';
    const newLI=document.createElement("LI");
    newLI.innerText=catName;
    list.append(newLI);
})

// ===========================
// INPUT/CHANGE EVENTS:
// ===========================

const newInput=document.querySelector('#ice');
newInput.addEventListener('change',function(e){ // fires when the value inside input is changed after shifting focus
    console.log('lol') 
})

const h1=document.querySelector('#iceH');
newInput.addEventListener('input',function(e){ // fires everytime value inside input changes
    h1.innerText=newInput.value;
})

// ===========================
// EVENT BUBBLING (Prevention):
// ===========================

const buttEB=document.querySelector('#container button');
const container=document.querySelector('#container');

buttEB.addEventListener('click',function(e){
    container.style.backgroundColor=makeRandColor(); 
    e.stopPropagation(); // Stops the event bubbling
})
container.addEventListener('click',function(){
    container.classList.toggle('hide');
})

const makeRandColor = ()=>{
    const r=Math.floor(Math.random()*255)+1;
    const g=Math.floor(Math.random()*255)+1;
    const b=Math.floor(Math.random()*255)+1;
    return `rgb(${r},${g},${b})`;
}

// ===========================
// EVENT DELEGATION:
// ===========================

// const lis=document.querySelectorAll('li');
// for(let li of lis){                              This will only apply for the li's that are actually
//     li.addEventListener('click',function(){       in the html file, not the ones added using JS
//         li.remove();
//     })
// }

list.addEventListener('click',function(e){
    console.log(e);
    e.target.nodeName==='LI' && e.target.remove();
})