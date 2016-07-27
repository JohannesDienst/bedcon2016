"use strict";
class Terminator {
}
function sugar(p1, p2 = "42", p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}
sugar('Hello');
class MiniRobot {
    constructor(firstname, lastname, age, gender) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
    }
}
class NanoRobot extends MiniRobot {
}
