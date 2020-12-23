// 12- Sorting Arrays

/*
The "sort()" orders the elements in an array.
It modifies the original array.
*/



const numbers = [2, 4, 3, 5, 1, 6];
numbers.sort();
console.log(numbers);


const myArray = [2, 'a', 4, 3, 'c', 5, 1, 'd', 6, 'b'];
myArray.sort();
console.log(myArray);

/*
If an array contains objects as its elements we need to pass a function as an argument to the "sort()" method.
This functions should take two parameters and must follow the following logic:
    a < b ---> -1
    a > b ---> 1
    a === b ---> 0

function(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
}
*/

const courses = [
    {id: 5, name: 'Python'},
    {id: 2, name: 'JavaScript'},
    {id: 3, name: 'Node.js'},
    {id: 4, name: 'C++'},
    {id: 1, name: 'Python'}
]

courses.sort(function compare(a, b) {
    const nameA = a.name.toLowerCase(); // To compare string we must convert then to lower case or upper case. In computers letters represent correspond o a number, see ascii table.
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    if (nameA === nameB) { // With this block of code when the name property as the same value, the items will be sorted by the id property.
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        if (a.id === b.id) return 0;
    }
});

console.log(courses);