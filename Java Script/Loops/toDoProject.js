let input = prompt("What would you like to do");
const todos = [];
let i=0;
while(input.toLowerCase() !== "quit" ){
    switch(input.toLowerCase()){
        case "new":
            let td = prompt("Enter a ToDo");
            todos[i++]=td;
            break;
        case "list":
            console.log("**************************")
            for(let j=0;j<todos.length;j++) console.log(`${j+1}. ${todos[j]}`);
            console.log("**************************")
            break;
        case "delete":
            let del = parseInt(prompt("Enter the list no. of item to be deleted")) - 1;
            if(!Number.isNaN(del)){
                let deleted = todos.splice(del,1);
                console.log(`OK, deleted ${deleted}.`);
            }
            else{
                console.log("Invalid!");
            }
            break;
    }
    input = prompt("What would you like to do");
}
console.log("OK YOU QUIT.")