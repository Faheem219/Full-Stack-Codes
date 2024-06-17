async function hello(){

}

const sing = async ()=>{
    throw "Oh no, problem!"; // Just always throws error, function will never move ahead
    return "La La La";
}

sing()
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})

const login = async (username,password)=>{
    if(!username || !password) throw "missing!";
    if(password==='corgifeet') return 'Welcome';
    throw "Inwalid";
}

login('adllkd','corgifeet')
.then(msg=>{
    console.log('Logged in',msg);
})
.catch(err=>{
    console.log("error",err);
})

// Color change using async functions:
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!"
}

rainbow().then(()=>console.log("end of rainbow")); // Another way of performing this statement below

async function printRainbow(){
    await rainbow();
    console.log("end of rainbow");
}

// printRainbow();

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

// Handling rejections in async functions (we have to use try & catch, an old concept):
async function makeTwoRequests(){
    try{
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');
        console.log(data1);
    }catch(e){
        console.log("Gotcha: ",e);
    }
}

makeTwoRequests();