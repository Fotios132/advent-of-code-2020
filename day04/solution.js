
// Reads input file txt
// Node fs docs: https://nodejs.org/api/fs.html
const fs = require("fs");
// This reads the file and splits each passport by empty lines
// MDN trim docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
// MDN split docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
const input = fs.readFileSync("day04/input.txt", "utf8").trim();
const passports = input.split(/\r?\n\r?\n/);

function makePassport(passportText) {
  const passport = {};
  const fields = passportText.split(/\s+/);

  for (const field of fields) {
    const parts = field.split(":");
    const key = parts[0];
    const value = parts[1];

    passport[key] = value;
  }
  return passport;
}

function validYear(value, min, max) {
  const year = Number(value);
  return value.length=== 4 && year >= min && year <= max;
}

function validHeight(value) {
  const number = Number(value.slice(0, -2));
  const unit = value.slice(-2);
  switch (unit ) {
    case "cm":
      return number >= 150 &&number <= 193;

    case "in":
      return number>= 59 && number <= 76;


    default:
      return false;

      
  }
}

// This checks each field name and runs the correct rule
// MDN switch docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
function validField(key, value) {
  switch (key) {
    case "byr":
      return validYear(value, 1920, 2002);

    case "iyr":
      return validYear(value, 2010, 2020);

    case "eyr":
      return validYear(value, 2020, 2030);

    case "hgt":
      return validHeight(value);

    case "hcl":
      return /^#[0-9a-f]{6}$/.test(value);

    case "ecl":
      return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value);

    case "pid":
      return /^\d{9}$/.test(value);

    case "cid":
      return true;

    default:
      return false;
  }
}
//chekcs required fields met
function hasRequiredFields(passport) {
  const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  for (const field of required) {
    if (!passport[field]) {
      return false;
    }
  }

  return true;
}
//check password validity
function isValidPassport(passport) {
  if (!hasRequiredFields(passport)) {
    return false;
  }
  for (const key in passport) {
    if (!validField(key, passport[key])) {
      return false;
    }
  }
  return true;
}

let part1 = 0;
let part2 = 0;




for (const passportText of passports) {
  const passport = makePassport(passportText);

  if (hasRequiredFields(passport)) {
    part1++;
  }

  if (isValidPassport(passport)) {
    part2++;
  }
}

console.log("Part 1:", part1);
console.log("Part 2:", part2);