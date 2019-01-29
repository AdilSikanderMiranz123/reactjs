// //arrow function do not need to bind the method

// const jobs = [

//   {id :1, isActive: true},

//   {id :2, isActive: false},

//   {id :3, isActive: false}
// ];

// const activeJobs = jobs.filter(job=>job.isActive)

// console.log(activeJobs);

// const person = {
//   talk() {

//     setTimeout(function(){
//      console.log(this);

//     }, 1000);
//   }
// };

// person.talk();

//map method to render the list of item

// const colors = ['red','blue','green'];

// const item =colors.map(color =>`<li>${color}</li>`);

// console.log(item);

// const clothsName = ["khadi", "Latha", "cotton"];

// const items = clothsName.map(name => `cloths name are : ${name}`);

// console.log(items);

//object destructing

// const address = {
//   street: "",
//   city: "",
//   country: ""
// };

// const { street, city, country } = address;

//if you want to set the alias  use it like it const {street :st} = address

//spread operator

// const first = { name: "adil" };
// const second = { job: "instructor" };

// const combined = {...first,...second, location: "Crewlogix" };

// console.log(combined);
//classes

// class Person {

//     constructor(name){
//       this.name = name;
//     }

//     walk() {
//       console.log('walk is called');

//     }

// }

// const person = new Person('adil');

// person.walk();
// console.log(person);

//inheritence 

// class Person {
//   constructor(name){
//     this.name = name;

//   }
//   walk(){

//       console.log('walk called');
//   }
// }


// class Teacher extends Person{
 
//   constructor(name,degree){
//     super();
  
//     this.degree=degree;
  
//   }
//   teach(){
//     console.log('teacher teches');
//   }


// }

// const teacher = new Teacher('adil');

//modules 





