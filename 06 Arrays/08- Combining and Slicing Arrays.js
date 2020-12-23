// 08- Combining and Slicing Arrays


const first = [1, 2, 3];
const second = [4, 5, 6];

/*
concat() Combining arrays
The concat() method is used to merge two or more arrays.
This method does not change the existing arrays, but instead returns a new array.
Syntax:
    const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])

Parameters
    valueN (Optional)
Arrays and/or values to concatenate into a new array. If all valueN parameters are omitted, concat returns a shallow copy of the existing array on which it is called.

Return value
    A new Array instance.
*/

const combined = first.concat(second);
console.log(combined);


/*
slice() Slicing arrays
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
The original array will not be modified.

Syntax
    arr.slice([start[, end]])

Parameters
    start Optional
        Zero-based index at which to start extraction.
        A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
        If start is undefined, slice starts from the index 0.
        If start is greater than the index range of the sequence, an empty array is returned.
    end Optional
        Zero-based index before which to end extraction. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
        A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.
        If end is omitted, slice extracts through the end of the sequence (arr.length).
        If  end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).

Return value
    A new array containing the extracted elements.
*/

const sliced = combined.slice(2, 4);
console.log(sliced)

/*
Both this method when dealing with Reference types they copy the object reference into the new array and not the object value.
Both the original and new array refer to the same object. That is, if a referenced object is modified, the changes are visible to both the new and original arrays.
This includes elements of array arguments that are also arrays.
*/