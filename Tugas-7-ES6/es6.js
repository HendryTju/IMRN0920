// Soal 1
golden = () => {
  console.log("This is golden!!");
};

// Soal 2
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName() {
      console.log(this.firstName + " " + this.lastName);
    },
  };
};
newFunction("William", "Imoh").fullName();

// Soal 3
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation);

// Soal 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

console.log(combined);

// Soal 5
const planet = "earth";
const view = "glass";
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit,  ${planet}  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam `;

console.log(before);
