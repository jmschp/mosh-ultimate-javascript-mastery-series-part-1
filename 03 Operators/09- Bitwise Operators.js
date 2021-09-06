// 09- Bitwise Operators


/*
Bit operators work on 32 bits numbers. Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
    &	AND
    |	OR
    ~	NOT
    ^	XOR
    <<	Left shift
    >>	Right shift

We humans use de decimal system to represent numbers 0..9, but in computers this numbers are stored in the binary format, which is a combination of 0 and 1
1 = 00000001
2 = 00000010
3 = 00000011
In binary each number is a bit.
Bitwise operator as similar to logical operator but they or on each bit of the number.
*/

console.log(1 | 2)
/*
Using the bitwise "|"  operator it will compare each bit (0 and 1) in its equivalent position, and where he finds 1 the result will be 1 otherwise it will be 0.
     1 = 00000001
     2 = 00000010
result = 00000011 ---> 3 represents 3 in decimal number
*/

console.log(1 & 2)
/*
Using the bitwise "&" operator it will compare each bit (0 and 1), and it will return 1 if both operands have 1 in the same position, otherwise it will return 0.
     1 = 00000001
     2 = 00000010
result = 00000000 ---> 0 represents 0 in decimal number
*/

/*
For a real world example
Lets say we want to implement an access controle system.
So the user can have this permissions:
    Read
    Write
    Execute
We can use one byte of information (the same as 8 bits) to determine the kind of permission a user has.
For each permission we assign one bit.
    Read                       ---> 00000100 ---> 4 in decimal
    Write                      ---> 00000010 ---> 2 in decimal
    Execute                    ---> 00000001 ---> 1 in decimal

    Read                       ---> 00000100 ---> 4 in decimal
    Read and Write             ---> 00000110 ---> 6 in decimal
    Read and Write and Execute ---> 00000111 ---> 7 in decimal
We are representing the permissions in binary numbers. For
*/

const readPermission = 4; // We convert the binary number 00000100 to decimal, which is 4.
const writePermission = 2; // We convert the binary number 00000010 to decimal, which is 2.
const executePermission = 1; // We convert the binary number 0000001 to decimal, which is 1.

let myPermission = 0; // We declare a variable and initially we do not have any permissions 0 decimal equal to 00000000 binary

myPermission = myPermission | readPermission; // With the bitwise "|" operator we are assign the read permission to the user 
console.log(myPermission)

myPermission = myPermission | writePermission; // And here we add the write permission.
console.log(myPermission);

let message = myPermission & executePermission ? 'yes' : 'no'; // We we check if the user has the Execute permission with the "&" operator.

// With the bitwise "|" we can add permission, and with the bitwise "&" operator we can che to see if the user has permissions.
