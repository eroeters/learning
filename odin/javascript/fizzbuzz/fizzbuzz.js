let answer = parseInt(
  prompt("Please enter the number you would like to Fizzbuzz up to: ")
);

for (let i = 1; i <= answer; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Fizzbuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
