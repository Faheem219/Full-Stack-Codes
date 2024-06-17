// In file systems of NodeJS, there are synchrounous functions and asynchronous fucntions; as the name 
// suggests, the synchronous halt the program until the file code has been fully executed while the
// asynchronous functions let the program move ahead to the next line of code 

const fs = require('fs');

// The below function is asynchronous:
fs.mkdir('test', { recursive: true }, (err) => {
    console.log("In the callback");
    if (err) throw err;
})

console.log("I come after mkdir (async) in the file");

// The below function is synchronous:
fs.mkdirSync('test2');
console.log("I come after mkdir (sync) in the file");

// To create a Boilerplate folder (A folder with .html .css and .js files):
// The files will be created in the dir where this file is being executed from using NodeJS in terminal
try {
    const folderName = process.argv[2] || 'Project';
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, ''); // The second arg is for the stuff to be included
    // inside created file, for our case we want it to be empty
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
    console.log("Something went wrong: ", e);
}