// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestCallback('books.com',function(response){
//     console.log('It worked!');
//     console.log(response);
//     fakeRequestCallback('books.com/page2',function(response){
//         console.log('It worked again!');
//         console.log(response);
//         fakeRequestCallback('books.com/page3',function(response){
//             console.log('It worked for the 3rd time');
//             console.log(response);
//         },function(err){
//             console.log("Error (3rd page)",err);
//         })
//     },function(err){
//         console.log("Error (2nd page)!",err);
//     })
// }, function(err){
//     console.log('Error!',err);
// })

// const request=fakeRequestPromise('yelp.com');
// request.then(()=>{ // if the promise has been resolved
//     console.log("It worked");
// }).catch(()=>{ // if the promise was rejected
//     console.log("Nope, error!");
// })

// The above could also be done like this:
fakeRequestPromise('yelp.com')
.then(()=>{
    console.log("It worked");
})
.catch(()=>{
    console.log("Nope, error!");
})

// Nested (which is not much better than the recursive function calls above):
fakeRequestPromise('yelp.com')
.then(()=>{
    console.log("It worked(0)");
    fakeRequestPromise('yelp.com/page1')
    .then(()=>{
        console.log("It worked (1)");
    })
        fakeRequestPromise('yelp.com')
        .then(()=>{
            console.log("It worked");
        })
        .catch(()=>{
            console.log("Nope, error!");
        })
    .catch(()=>{
        console.log("Nope, error!(1)");
    })
})
.catch(()=>{
    console.log("Nope, error!(0)");
})

// THE MAGIC OF PROMISE:
fakeRequestPromise('yelp.com')
.then((data)=>{
    console.log("It worked!(0)");
    console.log(data);
    return fakeRequestPromise('yelp.com/page2');
})
.then((data)=>{
    console.log("It worked!(1)");
    console.log(data);
    return fakeRequestPromise('yelp.com/page3');
})
.then((data)=>{
    console.log("It worked!(2)");
    console.log(data);
})
.catch((err)=>{ // Only one catch is used and nesting not required
    console.log("Oh no, one of the requests failed!");
    console.log(err);
})