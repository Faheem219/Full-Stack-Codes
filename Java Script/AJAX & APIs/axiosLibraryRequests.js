// This makes the requests and also parses the json while returning a promise, unlike fetch where 
// one extra step is required this is even simpler
// It is even more simpler when handling requests other than get

axios.get("https://swapi.dev/api/people/1/")
    .then(res => {
        console.log("response: ", res);
    })
    .catch(e => {
        console.log("error ", e);
    })

// Using ASYNC fucntion:
const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log("error ", e);
    }
}
getStarWarsPerson(5);

// Dad joke API (It requires a header to be set for data to be in JSON format, varies from API to API):
const getDadJoke = async () => {
    try {
        const config={headers:{Accept:"application/json"}};
        const res = await axios.get("https://icanhazdadjoke.com",config);
        console.log(res.data.joke);
    } catch (e) {
        console.log("error ", e);
    }
}
getDadJoke();

// DOM stuff
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke=async()=>{
    const jokeText = await dadJokeButton();
    const newLI=document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}
const dadJokeButton = async () => {
    try {
        const config={headers:{Accept:"application/json"}};
        const res = await axios.get("https://icanhazdadjoke.com",config);
        return res.data.joke;
    } catch (e) {
        return "NOPE";
    }
}

button.addEventListener('click',addNewJoke);