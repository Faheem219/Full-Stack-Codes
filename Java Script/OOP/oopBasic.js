function hex(r,g,b){
    return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}

function rgb(r,g,b){
    return `rgb(${r},${g},${b})`;
}

// =======================
// Factory Functions: (In this every object will have unique copy of functions which is why its unpreferred)
// =======================

function makeColor(r,g,b){ // Basically we are making an object and returning it, a factory of an object
    const color={};
    color.r=r;
    color.g=g;
    color.b=b;
    color.rgb=function(){
        return `rgb(${this.r},${this.g},${this.b})`;
    }
    color.hex = function(){
        const {r,g,b}=this; // Same as above method:
        return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35,255,150);
const secondColor = makeColor(0,20,100);

console.log(firstColor.hex===secondColor.hex) // Will return false, as both are pointing to unique copies
// of the hex method defined seperately in each class object

// =======================
// Constructor Functions: (This is preferred over factory functions)
// =======================

function Color(r,g,b){
    this.r=r;
    this.g=g;
    this.b=b;
}

Color.prototype.rgb = function(){ // REMINDER: Dont use arrow functions whenever using (this) keyword
    return `rgb(${this.r},${this.g},${this.b})`;
}

Color.prototype.hex = function(){
    const {r,g,b}=this; // Same as above method:
    return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}

Color.prototype.rgba = function(a=1.0){
    return `rgba(${this.r},${this.g},${this.b},${a})`
}

const myColor1 = new Color(255,40,100);
const myColor2 = new Color(0,20,100);

console.log(myColor1.hex===myColor2.hex) // this will return true, as both are pointing to the same method
// defined in the prototype of the color class