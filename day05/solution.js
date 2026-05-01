// Reads input file txt
// Node fs docs: https://nodejs.org/api/fs.html
const fs = require("fs");
// This reads the file, removes extra space, and splits it into lines
// MDN trim docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
// MDN split docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
const passes = fs.readFileSync("day05/input.txt", "utf8").trim().split(/\r?\n/);
function findSpot(code, low, high) {
  for (const letter of code) {
    const middle = Math.floor((low + high) / 2);
   
   
   
   
   
    if (letter === "F" || letter === "L") {
      high = middle;
    } else {
      low = middle + 1;
    }
  }


  return low;
}

function getSeatId(pass) {
  const rowCode = pass.slice(0, 7);
  const colCode = pass.slice(7);
  const row = findSpot(rowCode, 0, 127);
  const col = findSpot(colCode, 0, 7);
  return row * 8 + col;
}
const seatIds = [];


for (const pass of passes) {
  seatIds.push(getSeatId(pass));
}

let part1 = Math.max(...seatIds);
let part2 = 0;


for (let id = 1; id < part1; id++) {
  if (!seatIds.includes(id) && seatIds.includes(id -1) && seatIds.includes(id + 1)) {
    part2 = id;
  }
}

console.log("Part 1:", part1);
console.log("Part 2:", part2);