// More topics in oops -[class expression , hoisting ,inheritance, getter & setter]


// 1  Class Expression 

let  Animal = class{
    constructor(){
        this.name  = "Dodo";
        this.breed = "dog";
    }
};
let an1  = new Animal();



// Hoisting  
let an2  = new Animal();

let  Animals = class{
    constructor(){
        this.name  = "Dodo";
        this.breed = "dog";
    }
};


// inheritance 



class Marker{}
class BlueMarker extends Marker{

}


// getter and setter

class Gs{
constructor(){

    this._age = 12;
}
set me(val){
   if(val<0){
    console.error("not");
    return;

   }
   this._age = val;
   return this._age;
}
get me(){
return this._age;
}
}
let b1 = new Gs();
b1.me = 20;
console.log(b1.me);


// question solve
// section 1 : objects and oops thinking

// 1   Creating a user object that stores name and email and has a login method which prints "user logged in"
 let user ={
    name:"chetna",
    email :"chetnaambe01@gmail.com",
    login:function(){
        console.log("logged in");
    },
 };
user.login();



//  2   5 users making programme using class
class Person{
      constructor(name,email){
        this.name = name;
        this.email = email;
      }
    //   shared memory common
      loggedIn(){
        console.log("loggedin");
      }
}
let person1  = new Person("Chetna" , "H@h");
let person2  = new Person("Poul" , "p@p");
let person3  = new Person("john" , "j@j");

console.log(person1);
console.log(person2);
console.log(person3);


// 3 Create a product object that stores name and price and has a method which returns the final prise after discount 

let product ={
    name:"Tshirt",
    price:15000,
    discountPrice :function(){
       return this.price - 200;
    }
}
// product.discountPrice();
console.log(product.discountPrice());


// Section 2

//  Create a Car class with the following :  brand   speed  a drive method that prints the car brand and speed 

class Car{
    constructor(brand, speed){
        this.brand =brand;
        this.speed = speed;

    }
    drive(){
       return this.brand +" - " + this.speed
    }
}
let car1 = new Car("Hyundai", "180km/hrs");
let car2 = new Car("maruti",170);



//  Section 3 : Constructor and this keyword

// Create a student class whose constructor accepts name and roll number Add a method introduce that prints both values.
// without this showed undefined
class Student{
    constructor(name, rollno){
        this.name = name;
        this.rollno = rollno;
    }
    introduce(){
 return this.name +"-"+ this.rollno;
    }
   
}
let s = new Student("Chetna",101);


// Create an object with two methods :
// one method using a normal function
// one method using a arrow function


let one = {
    sayName:function() {  
      console.log(this);
    },
sayArrowName: ()=>{  
console.log(this);
}
}

one.sayName();
one.sayArrowName();


// Section 4

// Add a login method in two ways;    First, inside the constructor   then move the method to the prototype 

// es5 me constructor

function User(){
    this.name = "hello";
     this.login = function(){
        console.log("logged in");
     }
}


let m = new User();





function Mes(){
    this.name = "haha";

}
Mes.prototype.loggedin = function(){
    console.log("logged");
}

let bs = new Mes();


// Create two User objects and compare their login methods using equality .

function Object(val){
    this.name = val;

}
Object.prototype.loggedIn = function(){
    console.log("hii");
}

let u = new Object("chetna");
let u1 = new Object("Ambe");




// Section 5


//call
function abc(){
    console.log(this.name);
}
c
abc.call(obj);



//apply

function fg(a,b,c){
    console.log(this.name);
}
let ff = {
    name:"harsh",
};
// fg.apply(ff,[1,2,3]);


let mnc  =  fg.bind(ff);
mnc();