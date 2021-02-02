// 02- Adding Elements


const numbers = [3, 4];
console.log(numbers);

// Adding elements to the end.
numbers.push(5, 6); // We can pass one or more arguments and they will be placed in the end of the array.
console.log(numbers);

// Adding elements to beginning.
numbers.unshift(1, 2); // This methods pushes the existing elements to the right and adds new elements in the beginning
console.log(numbers);

/*
Adding elements in the middle.
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

Syntax
  let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])

Parameters
  start
    The index at which to start changing the array.
    If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many element as item[n*] provided.
    If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If array.length + start is less than 0, it will begin from index 0.

  deleteCount Optional
    An integer indicating the number of elements in the array to remove from start.
    If deleteCount is omitted, or if its value is equal to or larger than array.length - start (that is, if it is equal to or greater than the number of elements left in the array, starting at start), then all the elements from start to the end of the array will be deleted.
    Note: In IE8, it won't delete all when deleteCount is omitted.
    If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

  item1, item2, ... Optional
    The elements to add to the array, beginning from start. If you do not specify any elements, splice() will only remove elements from the array.

Return value
  An array containing the deleted elements.
  If only one element is removed, an array of one element is returned.
  If no elements are removed, an empty array is returned.
*/

numbers.splice(2, 0, 'a', 'b', 'c');
// The first parameter (type number) is the starting position (index).
// The second parameter (type number) is a delete count. How many we want to delete.
// The third parameters are the items we want to add.
console.log(numbers);
