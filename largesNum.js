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


// Foreach
// Find
// includes
// indexOf
// join = add a new element in an array of elements..doesnt work on strings
// keys =
// map.returns new array
// push returns the total no element in the arrays 
// reverse..manipulates the reverse 
// shift = removes the first element and returns the index/value
// pop == removes the last element
// slice returns a new set of starting from the specified index.. to the specified sliced index...all other specified index is sliced out.
// values
// some
// sort
// splice....changs the content of an array by add, removing and replacing existing element
// unshift
// entries..returns key and value

//  *DIFFEENCE BETWEEN FOREACh AND MAP
// filter


let Array = [1, 2, 3

];

console.log(Array.slice(2,2))