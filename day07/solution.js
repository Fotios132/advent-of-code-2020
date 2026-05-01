// Advent of Code 2020 - Day 7

// Reads input file txt
// Node fs docs: https://nodejs.org/api/fs.html
const fs = require("fs");
// This reads the file,removes spaces, and creates lines
// MDN split docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
const rules = fs.readFileSync("day07/input.txt", "utf8").trim().split(/\r?\n/);
const bags = {};

for (const rule of rules) {
  const [outsideBag, insideText] = rule.split(" bags contain ");
  bags[outsideBag] = [];
  if (insideText !== "no other bags.") {
    const insideBags = insideText.split(", ");
    for (const bag of insideBags) {
      const words = bag.split(" ");
      const amount = Number(words[0]);
      // Number changes the amount from text into a number
      // MDN Number docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
      const color = words[1] + " " + words[2];

      bags[outsideBag].push({
        amount: amount,
        color: color
      });
    }
  }
}

function canHoldGold(color) {
  for (const bag of bags[color]) {
    if (bag.color === "shiny gold") {
      return true;
    }

    if (canHoldGold(bag.color)) {
      return true;
    }
  }

  return false;
}

function countBagsInside(color) {
  let total = 0;

  for (const bag of bags[color]) {
    total += bag.amount + bag.amount * countBagsInside(bag.color);
  }

  return total;
}










let part1 = 0;

for (const color in bags) {
  if (color !== "shiny gold" && canHoldGold(color)) {
    part1++;
  }
}

const part2 = countBagsInside("shiny gold");

console.log("Part 1:", part1);
console.log("Part 2:", part2);