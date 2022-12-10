
const inputArgs = process.argv.slice(2).filter(input => input >= 0).filter(input => !isNaN(input));

// the above addresses the edge cases to make sure a number is passed and that it is greater or 
// equal to 0. The below allows you to run the inputArgs by applying the setTimeout function.

inputArgs.forEach((input) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, input * 3000);
});

