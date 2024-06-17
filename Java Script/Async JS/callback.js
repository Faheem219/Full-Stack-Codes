// setTimeout(()=>{
//     document.body.style.backgroundColor='red';
// },1000)
// setTimeout(()=>{
//     document.body.style.backgroundColor='orange';
// },2000);
// setTimeout(()=>{
//     document.body.style.backgroundColor='yellow';
// },3000)

// Another way to do above the thing:
// setTimeout(()=>{
//     document.body.style.backgroundColor='red';
//     setTimeout(()=>{
//         document.body.style.backgroundColor='orange';
//         setTimeout(()=>{
//             document.body.style.backgroundColor='yellow';
//         },1000)
//     },1000);
// },1000)

// One more way:
const delayedColorChange = (newColor,delay,doNext) =>{
    setTimeout(()=>{
        document.body.style.backgroundColor=newColor;
        doNext && doNext();
    },delay)
}

delayedColorChange('red',1000,()=>{
    delayedColorChange('orange',1000,()=>{
        delayedColorChange('yellow',1000,)
    })
});