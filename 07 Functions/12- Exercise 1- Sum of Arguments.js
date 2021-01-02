// 12- Exercise 1- Sum of Arguments

function sum(...numbers) {
    if (Array.isArray(numbers[0])) {
        return numbers[0].reduce((acc, curr) => acc + curr);
    }
    return numbers.reduce((acc, curr) => acc + curr);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum([1, 2, 3, 4, 5]));

// Mosh solution

function sum(...items) {
  if (items.length ===1 && Array.isArray(items[0])) {
      items = [...items]
  }
  return numbers.reduce((acc, curr) => acc + curr);
}