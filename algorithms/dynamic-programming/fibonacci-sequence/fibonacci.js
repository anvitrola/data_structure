const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const map = new Map();

function calculateFibonacci(number) {
  if (number === 0) return 0;
  if (number === 1) return 1;

  const lastNumber = getNumberFromMapOrCalculateItsFibonacci(number - 1);
  let nextToLastNumber = getNumberFromMapOrCalculateItsFibonacci(number - 2);

  return lastNumber + nextToLastNumber;
}

function getNumberFromMapOrCalculateItsFibonacci(number) {
  const isNumberOnMap = map.get(number);

  if (!isNumberOnMap) {
    const numberFibonacci = calculateFibonacci(number);
    map.set(number, numberFibonacci);
    return numberFibonacci;
  }

  return isNumberOnMap;
}

rl.question("Fibonacci(n) for n = ", (answer) => {
  console.log(`F(${answer}) = `, calculateFibonacci(Number(answer)));
  rl.close();
});

rl.on("close", () => {
  console.log("Au revoir!");
  process.exit(0);
});
