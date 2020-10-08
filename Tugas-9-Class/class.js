// Soal 1
// Create Class Animal, parameter constructor = name, property Legs = 4 & cold_bolded = false

// Relase 0
class Animal {
  constructor(name) {
    // Insert needed property
    this._name = name;
    this.legs = 4;
    this.cold_bolded = false;
  }
  // use get and set to obtain name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

var sheep = new Animal("Shaun");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_bolded);

// Release 1 - Create new class extends from first class Animal.
// Alter property for class Ape, and add new method in each class
class Ape extends Animal {
  constructor(name) {
    // use super with parameter name to get extension from parent
    super(name);
    this.legs = 2;
  }

  yell() {
    console.log("Auoooo");
  }
}

class Frog extends Animal {
  constructor(name) {
    // use super with parameter name to get extension from parent
    super(name);
  }

  jump() {
    console.log("Hop Hop");
  }
}

var sungokong = new Ape("Kera Sakti");
sungokong.yell();
var kodok = new Frog("Buduk");
kodok.jump();

// Soal 2

class Clock {
  constructor({ template }) {
    this.template = template;
  }
  // Add method render
  render() {
    // change var to let, due to update value
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    let mins = date.getMinutes();
    if (mins < 10) {
      mins = "0" + mins;
    }
    let secs = date.getSeconds();
    if (secs < 10) {
      secs = "0" + secs;
    }
    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }
  // Add method stop
  stop() {
    clearInterval(this.timer);
  }
  // Add method start
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
