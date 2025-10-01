import { somePublicVariable, data } from './data.js';// Modules js => ES Modules

const myObject = {
  name: "Alice",
  age: 30,
  city: "Wonderland"
};

let something = "test";
const anotherThing = "anotherTest";

console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.city);

class User {

    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    greet() {
        
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old and I live in ${this.city}.`);
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getCity() {
        return this.city;
    }

    doSomething() {
        console.log("Doing something...");
        console.log(something, anotherThing);
        console.log(data.something, data.anotherThing);
    }

}

const user1 = new User("Bob", 25, "Builderland");
user1.greet();
user1.doSomething();