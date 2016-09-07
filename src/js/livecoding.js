"use strict";
class Terminator {
    constructor(model, name) {
        this.model = model;
        this.name = name;
    }
}
function sugar(p1, p2 = "42", p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}
sugar('hello');
let isDone = false;
let aNumber = 1;
let aString = "Hello Berlin";
let arrayOne = [1, 2, 3];
let arrayTwo = [2, 3, 4];
let iDontKnow = "OhOh";
function printName(aRobot) {
    console.log(aRobot.name);
}
let myRobot = { name: 'Arnold', model: 't800' };
printName(myRobot);
printName({ name: 'T1000' });
let miniRobot = { name: 'mini', logic: false };
printName(miniRobot);
class SpecialRobot {
    constructor(name, color = 'metallic') {
        this.color = color;
        this.name = name;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
class SimpleRobot {
    constructor(firstname, lastname, age, gender) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
    }
}
let aSimpleRobot = new SimpleRobot('Simple', 'Mr. Robot', 30, 'male');
function buildName(firstName, ...restOfName) {
    return firstName + " " +
        restOfName.join(" ");
}
buildName("Speedy", "Speedweg", "25", "12345");
