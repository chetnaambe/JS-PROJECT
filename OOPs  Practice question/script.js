// SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.

let laptop = {
    barnd:"HP VICTUS",
    price:75000,
    deal:function(){
        console.log("Laptop Started");
    },
    finalPrice:function(){
     console.log(this.price + 2000);
    }
}
laptop.finalPrice();
laptop.deal();



// SECTION 2: Classes and Objects

// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.

class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;

    } 
    showDetails(){
       console.log(this.name +" -"+ this.salary);
      
    }
}

let one = new Employee("Chetna", 25000);
// one.showDetails();

let two = new Employee("Chetna", 55000);
two.showDetails();

// Section 3
function hii(){
    this.name = "chetna";
    this.login = function(){
        console.log("hello");
    }
    hii.prototype.loggedin = function(){
            console.log("hii");
    }
}
let bs = new hii();


// section 4
function abc(){
    console.log(this.name);
}
let on ={
    name:"chetna"
}
abc.call(on);



//apply

function fg(a,b,c){
    console.log(this.name);
}
let ff = {
    name:"harsh",
};
fg.apply(ff,[1,2,3]);