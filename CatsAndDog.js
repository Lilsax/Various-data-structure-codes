const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let currentLine = 0;
function readLine() {
  return input[currentLine++];
}

let casesNumber = readLine();

let [numberOfAnimals, numberOfDogsFood, numberOfCatFood, foodWillBeAdded] =
  readLine().split(" ");

let status = readLine();

while (casesNumber > 0) {
  let output = true;

  if (!status.includes("D")) {
    output = false;
  } else {
    for (let x of status.split(" ")) {
      if ((!numberOfDogsFood || !numberOfCatFood) && numberOfAnimals > 1) {
        output = false;
        return;
      }

      if (x === "C") {
        if (numberOfCatFood === 0 && numberOfAnimals > 1) {
          output = false;
          return;
        }

        numberOfCatFood--;
        numberOfAnimals--;
      }

      if (x === "D") {
        if (numberOfDogsFood === 0 && numberOfAnimals > 1) {
          output = false;
          return;
        }

        if (foodWillBeAdded > 0) {
          numberOfCatFood += foodWillBeAdded;
        }
        numberOfDogsFood--;
        numberOfAnimals--;
      }
    }
  }

  console.log(`Case #${casesNumber}: ${output.toString().toUpperCase()}`);
  casesNumber--;
}
