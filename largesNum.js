let numbers = 15678;
let bigDigit = 0;

while (numbers != 0) {
  let digits = numbers % 10;

  if (digits > bigDigit) {
    bigDigit = digits;
  }
  numbers = Math.floor(numbers / 10);
}

console.log(bigDigit);
let Users = {John, Kristen, Laitu}