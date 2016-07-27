"use strict";

interface Robot { /* TBD */ }

class Terminator implements Robot {
  /* TBD */ 
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

  constructor(firstname: string, lastname: string, age: number, gender: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender
  }
}

class NanoRobot extends MiniRobot {

}
