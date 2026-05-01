/*
Advent of Code 2020 - Day 1

Sources:
Node.js docs: https://nodejs.org/docs/latest/api/
Node fs docs: https://nodejs.org/docs/latest/api/fs.html
MDN Node docs: https://developer.mozilla.org/en-US/docs/Web/API/Node
MDN String trim: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
MDN String split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
MDN Array map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
MDN Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

What I did:
I read the input file, changed the lines into numbers,
then found which numbers add up to 2020.
*/

const fs = require("fs");

// Read the input file.
const input = fs.readFileSync(__dirname + "/input.txt", "utf8");

// Split the input into lines and change them into numbers.
const numbers = input.trim().split("\n").map(Number);

// Part 1: find two numbers that add up to 2020.
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] + numbers[j] === 2020) {
      console.log("Part 1:", numbers[i] * numbers[j]);
    }
  }
}

// Part 2: find three numbers that add up to 2020.
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    for (let k = j + 1; k < numbers.length; k++) {
      if (numbers[i] + numbers[j] + numbers[k] === 2020) {
        console.log("Part 2:", numbers[i] * numbers[j] * numbers[k]);
      }
    }
  }
}
