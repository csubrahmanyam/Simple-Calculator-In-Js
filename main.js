/***********************************
 * Simple Calculator In JavaScript *
 ***********************************/

const readline = require("readline-sync");

function main() {
  console.log(`Simple Calculator (ctrl + c for quit!)`);
  while (true) {
    //Take User Input
    let num1 = Number(readline.question(`Enter first number:`));
    let symbol = readline.question(`Enter symbol(+,-,*,/,%):`);
    let num2 = Number(readline.question(`Enter second number:`));

    //Calculate According To User's Choice
    switch (symbol) {
      case `+`:
        console.log(`Result: ${num1 + num2}`);
        break;
      case `-`:
        console.log(`Result: ${num1 - num2}`);
        break;
      case `*`:
        console.log(`Result: ${num1 * num2}`);
        break;
      case `/`:
        console.log(`Result: ${num1 / num2}`);
        break;
      case `%`:
        console.log(`Result: ${num1 % num2}`);
        break;
      default:
        console.log(`Invalid symbol!`);
        break;
    }
  }
}

main();
