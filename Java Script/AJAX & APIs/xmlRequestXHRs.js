// NOT IMPORTANT TO REMEMBER THIS:

const req=new XMLHttpRequest();

req.onload=function(){
    console.log("It loaded.");
    const data = JSON.parse(this.responseText);
    console.log(data.name, data.height,"cm");

    // Really annoying to make multiple requests it would have to be nested here
    // const req2=new XMLHttpRequest();
    // ..........
}

req.onerror=function(){
    console.log("Error!");
    console.log(this);
}

req.open("GET","https://swapi.dev/api/people/1/");
req.send();
