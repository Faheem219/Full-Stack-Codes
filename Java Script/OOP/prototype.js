// Just as in java, in JS to access wrapper class capital S String is used, and same for any other data type
// We are modifying the yell method of string class which is stored in its prototype
String.prototype.yell = function(){
    return `OMG!!! ${this.toUpperCase()}!!!! AGHHHH!!!!`;
}

Array.prototype.pop = function(){
    return "Sorry, I will never pop anything ever again";
}