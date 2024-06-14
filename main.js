/***********************************
 * Simple Calculator In JavaScript *
 ***********************************/

function main() {
  console.log(`Simple Calculator (ctrl + c for quit!)`);
  while (true) {
    //Take User Input
    let num1 = Number(prompt(`Enter first number:`));
    let symbol = prompt(`Enter symbol(+,-,*,/,%):`);
    let num2 = Number(prompt(`Enter second number:`));

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
      default:
        console.log(`Invalid symbol!`);
        break;
    }
  }
}

main();
