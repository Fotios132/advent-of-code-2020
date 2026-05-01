// Advent of Code 2020 - Day 6

// Reads input file txt
// Node fs docs: https://nodejs.org/api/fs.html
const fs = require("fs");
// This reads the file, removes extra space, and splits each group by empty lines
// MDN trim docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
// MDN split docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
const input = fs.readFileSync("day06/input.txt", "utf8").trim();
const groups = input.split(/\r?\n\r?\n/);





let part1 = 0;
let part2 = 0;

for (const group of groups) {
  // This removes line breaks so the group becomes one big string
  // MDN replace docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  const allAnswers = group.replace(/\r?\n/g, "");
  const anyoneYes = new Set(allAnswers);
  part1 += anyoneYes.size;
  const people = group.split(/\r?\n/);

  let everyoneYes = 0;

  for (const letter of anyoneYes) {
    let count = 0;

    for (const person of people) {
      if (person.includes(letter)) {
        count++;
      }
    }
    if (count === people.length) {
      everyoneYes++;
    }
  }
  part2 += everyoneYes;
}



console.log("Part 1:", part1);
console.log("Part 2:", part2);