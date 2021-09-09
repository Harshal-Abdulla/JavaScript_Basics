console.log("MERGE CLASS 1 ES6")

var arr = [1,2,3,4];
console.log(arr[2]);

var[a,b,c,d] = [1,2,3,4]//ES6 destructuring
console.log(a);
console.log(b);
console.log(d);
// we can assign any values to the respective array datas,  e is not deifned here
function getscores() {
    return[90,100];
}
let[x,y,z]=getscores();

console.log(x);
console.log(z);

//object restructuring

const obj = {
    fullname:"Harshal Abdulla" ,
    email: "harshalabdulla1999@gmail.com" ,
    age: 20
};
console.log(obj.email);

let{fullname,age,email,dum} = obj;//order doesnt matter
console.log(email);
console.log(dum);

let person = {
    firstname: "Nikhil",
    lastname: "Agarwal",
    age1: 20,
    middlename: "DNA",
  };
  let { age1, firstname, lastname, middlename = "" } = person;
  console.log(age1);
  console.log(firstname);
  console.log(lastname);
  console.log(middlename);

  //ES6 Arrow fuctions

// function add(x, y) {
//     return x+y;
// }
// console.log(add(10, 20));

// let add = function(x,y) {
//     return x+y;
// }
// console.log(add(10,20))
 

let add = (x,y) => {
    return x+y };
console.log(add(10,30));

const counter = {
    count: 1,
    nikhil: function() {
        return ++(this.count);
    },
    key: this,
    agarwal: () => {
        return --(this.count);
    }
}
console.log(counter);
console.log(counter.agarwal());
console.log(counter.nikhil());
console.log(counter.nikhil());
console.log(counter.nikhil());
console.log(counter);

