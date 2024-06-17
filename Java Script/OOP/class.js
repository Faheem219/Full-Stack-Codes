// Classes are syntactic sugars (cleaner, neater way of writing things) of the constructor functions

class ClassColor{
    constructor(r,g,b,name){ // This will automatically run whenever the class is instantiated
        this.r=r;
        this.g=g;
        this.b=b;
        this.name=name;
        this.calcHSL();
    }
    innerRGB(){ // New shorthand syntax for creating functions in JS
        const {r,g,b}=this;
        return `${r},${g},${b}`;
    }
    rgb(){
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a=1.0){
        return `rgb(${this.innerRGB()},${a})`;
    }
    hex(){
        const {r,g,b}=this; // Same as above method:
        return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
    }
    hsl(){
        return `hsl(${this.h},${this.s}%,${this.l}%)`
    }
    fullSaturation(){
        return `hsl(${this.h},100%,${this.l}%)`
    }
    opposite(){
        const newHue = (this.h+180)%360;
        return `hsl(${newHue},${this.s}%,${this.l}%)`
    }
    calcHSL(){
        let {r,g,b}=this;
        r/=255; g/=255; b/=255;
        let cmin=Math.min(r,g,b),
            cmax=Math.max(r,g,b),
            delta=cmax-cmin,
            h=0, s=0, l=0;
        
        if(delta==0) h=0;
        else if(cmax==r) h=((g-b)/delta)%6;
        else if(cmax==g) h=(b-r)/delta+2;
        else h=(r-g)/delta+4;

        h=Math.round(h*60);
        if(h<0) h+=360;
        l=(cmax+cmin)/2;
        s= delta==0?0:delta/(1-Math.abs(2*l-1));
        s=+(s*100).toFixed(1);
        l=+(l*100).toFixed(1);

        this.h=h;
        this.s=s;
        this.l=l;
    }
}

const c1 = new ClassColor(255,67,89,'tomato');
const c2 = new ClassColor(255,255,255,'white');

console.log(c1.hex===c2.hex);

// =======================
// Inheritance (extends, super keywords):
// =======================

// parent class:
class Pet{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating!`;
    }
}

// Subclasses:
class Cat extends Pet{
    constructor(name,age,livesLeft=9){
        super(name,age);
        this.livesLeft=livesLeft;
    }
    meow(){
        return 'meowwwww';
    }
}

class Dog extends Pet{
    bark(){
        return 'wooffff';
    }
    eat(){
        return `${this.name} scarfs his food`
    }
}

const monty = new Cat('Monty',9);
console.log(monty,monty.meow(),monty.eat());
const wyatt = new Dog('Wyatt',13);
console.log(wyatt,wyatt.bark(),wyatt.eat());