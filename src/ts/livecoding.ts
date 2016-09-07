"use strict"; // Warum brauch ich das?

// tsconfig in welcher Version?
// Shortcut Code auskommentieren?

interface Robot {
  name: string;
  model?: string;
//  canSpeak(): boolean;
}

class Terminator implements Robot {
  
  model: string;
  name: string;

  constructor(model :string, name :string) {
      this.model = model;
      this.name = name;
  }

//  canSpeak(): boolean {
//    return true;
//  }
}

function sugar(p1, p2="42", p3?) {
  console.log(p1); // Hello
  console.log(p2); // 42
  console.log(p3); // undefined
}
sugar('hello');

let isDone :boolean = false;
let aNumber :number = 1;
let aString :string = "Hello Berlin";

let arrayOne :number[] = [1,2,3];
let arrayTwo :Array<number> = [2, 3, 4];

let iDontKnow :any = "OhOh";

// Error
// let numberEl :string = arrayTwo.length;

function printName(aRobot :Robot) {
    console.log(aRobot.name);
}

let myRobot = 
    {name: 'Arnold', model: 't800'};

printName(myRobot);
printName({name: 'T1000'});

interface DumbRobot extends Robot {
    name :string;
    logic :boolean;
}

let miniRobot :DumbRobot = {name: 'mini', logic: false};
printName(miniRobot);

class SpecialRobot implements Robot {
    name: string;
	
    constructor(name: string, public color: string = 'metallic') {
        this.name = name;
    }

    setColor(color: string) {
        this.color = color;
    }
	
    getColor() {
        return this.color;
    }
}

// Firstname protected oder public?
// Wie funktioniert protected
class SimpleRobot {
    firstname: string;
    public lastname: string;
    protected age: number;
    private gender: string;

    constructor(firstname: string, lastname: string,
      age: number, gender: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender
    }
}

let aSimpleRobot :SimpleRobot =
  new SimpleRobot('Simple', 'Mr. Robot', 30, 'male');

// Beispiel auf was ich zugreifen kann! Wie geht das mit protected?

function buildName(firstName: string,
    ...restOfName: string[]) {
      return firstName + " " +
             restOfName.join(" ");
}
buildName("Speedy", "Speedweg", "25", "12345");