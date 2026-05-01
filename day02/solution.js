/*
Advent of Code 2020 - Day 2

Sources:
Node.js docs: https://nodejs.org/docs/latest/api/
Node fs docs: https://nodejs.org/docs/latest/api/fs.html
MDN Node docs: https://developer.mozilla.org/en-US/docs/Web/API/Node
MDN String split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
MDN String trim: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
MDN Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

What I did:
I read each password rule. Part 1 checks the letter count.
Part 2 checks if the letter is in exactly one of the two positions.
*/

const fs = require("fs");

const input = fs.readFileSync(__dirname + "/input.txt", "utf8");
const lines = input.trim().split("\n");

let part1 = 0;
let part2 = 0;

for (let line of lines) {
  const [rule, letterPart, password] = line.split(" ");
  const [min, max] = rule.split("-").map(Number);
  const letter = letterPart[0];

  let count = 0;

  for (let char of password) {
    if (char === letter) {
      count++;
    }
  }

  if (count >= min && count <= max) {
    part1++;
  }

  const first = password[min - 1] === letter;
  const second = password[max - 1] === letter;

  if (first !== second) {
    part2++;
  }
}

console.log("Part 1:", part1);
console.log("Part 2:", part2);
