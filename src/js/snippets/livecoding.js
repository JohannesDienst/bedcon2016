"use strict";
var livecoding;
(function (livecoding) {
    let isDone = false;
    let decimal = 6;
    let color = "berlin";
    let aArray = [1, 2, 3];
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    let c = Color.Green;
    let notSure = 4;
    function printName(aRobot) {
        console.log(aRobot.name);
    }
    let T800 = { name: 'Arnold', canSpeak: function () { return false; } };
    printName(T800);
    class Terminator {
        constructor(name) {
            this.name = name;
        }
        canSpeak() {
            return true;
        }
    }
    let aHuman = { name: 'Homo sapiens', hugeBrain: true };
    class Dog {
        constructor(name, color) {
            this.color = color;
        }
        getColor() {
            return this.color;
        }
    }
    class Labrador {
        constructor(firstname, lastname, age, gender) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
            this.gender = gender;
        }
    }
    let cuteDog = new Labrador("Cookies", "Monster", 5, "male");
    class GoldenRetriever extends Labrador {
        getFirstname() {
            return this.firstname;
        }
        getLastname() {
            return this.lastname;
        }
        getAge() {
            return this.age;
        }
    }
    function printDogName(aDog) {
        console.log(aDog.name);
    }
    let printFunc;
    printFunc = printName;
    let printFunc2;
    function funcDefault(p1 = "World", p2) {
        console.log('Hello ' + p1 + ' ' + p2);
    }
    funcDefault("Buenos dias ", 42);
    funcDefault();
    function buildName(firstName, ...restOfName) {
        return firstName + " " +
            restOfName.join(" ");
    }
    function identity(arg) {
        return arg;
    }
    function loggingIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
    function sugar(p1, p2 = "42", p3) {
        console.log(p1);
        console.log(p2);
        console.log(p3);
    }
    sugar('Hello');
    class GenericNumber {
    }
    let myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add =
        function (x, y) { return x + y; };
    function applyMixin(derivedCtor, baseCtors) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
    class Person {
    }
    class ConsoleLogger {
        log() { }
    }
    class PersonLogger {
        constructor(name) {
            this.name = name;
        }
    }
    applyMixin(PersonLogger, [new Person(), new ConsoleLogger()]);
    var jim = new PersonLogger("Jim");
    var n = jim.name;
    jim.log();
    function getRobot() {
        return null;
    }
    let robot = getRobot();
    robot.move();
    function getName(n) {
        if (typeof n === 'string') {
            return n;
        }
        else {
            return n();
        }
    }
    function getCounter() {
        let counter = function (start) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    let count = getCounter();
    count(10);
    count.reset();
    count.interval = 5.0;
    class Control {
    }
    class Button extends Control {
        select() { }
    }
    class Image extends Control {
    }
    class Location {
        select() { }
    }
    let myArray;
    myArray = ["Bob", "Fred"];
    let myStr = myArray[0];
})(livecoding || (livecoding = {}));
