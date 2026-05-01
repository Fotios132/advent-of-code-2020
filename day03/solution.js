// Reads input file txt
// Node fs docs: https://nodejs.org/api/fs.html
const fs = require("fs");

// This line will read, remove extra space, and split all info into lines
// MDN trim docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
// MDN split docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
const map = fs.readFileSync("day03/input.txt", "utf8").trim().split(/\r?\n/);

function countTrees(right, down) {
  let trees = 0;
  let x = 0;

  for (let y = down; y < map.length; y += down) {
    x += right;

    // Since the map repeats we need to wrap it
    // MDN remainder docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
    const position = x % map[y].length;

    if (map[y][position] === "#") {
      trees++;
    }
  }

  return trees;
}

const part1 = countTrees(3, 1);

const slope1 = countTrees(1, 1);
const slope2 = countTrees(3, 1);
const slope3 = countTrees(5, 1);
const slope4 = countTrees(7, 1);
const slope5 = countTrees(1, 2);

const part2 = slope1 * slope2 * slope3 * slope4 * slope5;

console.log("Part 1:", part1);
console.log("Part 2:", part2);