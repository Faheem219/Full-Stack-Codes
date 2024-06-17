// Here making multiple requests is easy and it is not nested (here 1st has to be done before 2nd one)
// not necessary depends on the website

fetch("https://swapi.dev/api/people/1/") // This returns a promise
    .then(res => {
        console.log("Resolved: ", res); // the res object will not conatin every data that was requested cuz
        return res.json(); // this promise is resolved as soon as just one header is received, ie, it is prematurely
    }) // resolved, so .json method is used, it will return all the data in form of another promise
    .then(data => {
        console.log(data);
        return fetch("https://swapi.dev/api/people/2/");
    })
    .then(res => {
        console.log("2nd request resolved");
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log("Error!", e);
    })

// Using ASYNC fucntions:
const loadStarWars = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/peoffefple/2/");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("error! ", e);
    }
}

loadStarWars();