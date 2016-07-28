"use strict";

interface Robot {
  model: string;
  canSpeak(): boolean;
}

class Terminator implements Robot {

  constructor(public model: string) {}

  canSpeak(): boolean {
    return true;
  } 
}

function sugar(p1, p2="42", p3?) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}
sugar('Hello');
////////////////////////////////////////////////7
class MiniRobot {
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

class NanoRobot extends MiniRobot {
  public getFirstname() {
    return this.firstname;
  }

  public getLastname() {
    return this.lastname;
  }

  public getAge() {
    return this.age;
  }

// Private property!
//  public getGender() {
//    return this.gender;
//  }
}
