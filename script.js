// alert("Cool chicks rise up!!!")
const PI = 3.1415;
const radius = 5;
const area = 78.5375;
const spaceReq = 0.8;
const plants = 20;

// Plant growth
const week1 = plants;
const week2 = plants * 2;
const week3 = week2 * 2;

// Control flow
//  Week 1 
let space1 = spaceReq * plants;

if (space1 >= 80) {
  console.log("Time to prune!")
} else if (space1 === 50 <= 80) {
  console.log("The plants are growth is perfect! ")
} else if (space1 <= 50) {
  console.log("Room to plant more plants!")
}
//--------> Room to plant more plants!

console.log("_____________")

// Week 2
let space2 = spaceReq * week2;

if (space2 >= 80) {
  console.log("Time to prune!")
} else if (space2 === 50 <= 80) {
  console.log("The plants are growth is perfect! ")
} else if (space2 <= 50) {
  console.log("Room to plant more plants!")
}
//--------> Room to plant more plants!

console.log("_____________")

// Week 3
let space3 = spaceReq * week3;

if (space3 >= 80) {
  console.log("Time to prune!")
} else if (space3 === 50 <= 80) {
  console.log("The plants are growth is perfect! ")
} else if (space3 <= 50) {
  console.log("Room to plant more plants!")
} else {
  console.log("Do not plant anymore plants!")
}
//-------> Do not plant anymore plants!


console.log("_____________")

// Part 2 Thinking Bigger

  let numPlants = 100;
  let weeks = 10;
  const radius2 = 5;
  const spaceReq2 = 0.8;


  

