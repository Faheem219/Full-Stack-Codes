const fakeRequest = (url)=>{
    return new Promise((resolve,reject)=>{
        const rand=Math.random();
        setTimeout(() => {
            if(rand<0.5)
                resolve("Your fake data");
            reject('Error');
        },1000);
    })
}

fakeRequest('dogs/1')
.then((data)=>{
    console.log("Done");
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

// Improving color change delayed function using promises:
const delayedColorChange=(color,delay)=>{
    return new Promise((resolve,rejct)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve();
        },delay);
    })
}

delayedColorChange('red',1000)
.then(()=>delayedColorChange('orange',1000))
.then(()=>delayedColorChange('yellow',1000))
.then(()=>delayedColorChange('green',1000))
.then(()=>delayedColorChange('blue',1000))
.then(()=>delayedColorChange('indigo',1000))
.then(()=>delayedColorChange('violet',1000))