// 10- Garbage Collection

/*
In low level languages like C or C++ when we create an object we have to allocate memory to it.
And when we don't need to that ir anymore we have to deallocate the memory.
In JavaScript we don't have this concept, when we create an object, memory is automatically allocated to it.
And when we don~t need to use it anymore it is deallocate automatically.
The JavaScript Engine has a Garbage Collector.
The job of this Garbage Collector is to find the variables and constant that are no longer used, and then deallocate the memory that was allocated to then.
Memory allocation and deallocation happens automatically behind the scenes, and we do not have control over it.
*/

const x = {a: 1, b: 2};
console.log(x);
// Memory is allocated to constant "x" and automatically deallocated when not needed anymore.
