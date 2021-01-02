// 14- Exercise 3- Error Handling

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("First argument must be an array");
  }
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

const numbers = [1, 2, 3, 4, 1, 5];

try {
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (error) {
  console.error(error.message);
}
