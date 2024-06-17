// ==========================
//  onclick (ON) PROPERTIES 
// ==========================

const btn=document.querySelector('#v2');
btn.onclick=function(){
    console.log("You clicked me");
    console.log('i think it worked');
}

function scream(){
    console.log("aaaaahhhh");
    console.log("STOPPPP")
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick=() =>{
    alert('You clicker')
}

// ==========================
//  addEventListener (preferred)
// ==========================

const btn3=document.querySelector('#v3');
btn3.addEventListener('dblclick',function(){
    alert("Something");
})

function twist(){
    console.log("TWIST");
}

function shout(){
    console.log("SHOUT");
}

const tasButton=document.querySelector('#tas');
// tasButton.onclick=twist;  This doesnt work and thats why addEventListener is used
// tasButton.onclick=shout;
tasButton.addEventListener('click',twist, {once:true}); // once will make it run only once and then removes it
tasButton.addEventListener('click',shout);

// tasButton.removeEventListener(); Will remove it

// ==========================
//  random color exercise
// ==========================

const button=document.querySelector('section:nth-of-type(2) button');
button.addEventListener('click',function(){
    const h2=document.querySelector('section:nth-of-type(2) h2');
    newColor=makeRandColor();
    h2.textContent=newColor;
    document.querySelector('section:nth-of-type(2)').style.backgroundColor=newColor;
})

const makeRandColor = ()=>{
    const r=Math.floor(Math.random()*255)+1;
    const g=Math.floor(Math.random()*255)+1;
    const b=Math.floor(Math.random()*255)+1;
    return `rgb(${r},${g},${b})`;
}

// Using this keyword:
const buttons=document.querySelectorAll('#this button')
for(let button of buttons){
    button.addEventListener('click',colorize);
}

function colorize(){
    this.style.backgroundColor=makeRandColor();
    this.style.color=makeRandColor();
}