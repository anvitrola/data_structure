export function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
      continue;
    }
    if (i % 3 === 0) {
      result.push("Fizz");
      continue;
    }
    if (i % 5 === 0) {
      result.push("Buzz");
      continue;
    }

    result.push(i);
  }

  result.forEach((element) => {
    console.log(element);
  });
}
