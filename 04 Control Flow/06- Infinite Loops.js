// 06- Infinite Loops

/*
A infinite loop executes infinity or forever.
If we create such a loop we may crash the browser or the computer.
*/

let i = 0;
while (i < 5){
    console.log(i);
    // i++
}
// If we forget to increment i we loop runs forever.


for (i = 1; i > 0; i++) {
    console.log(i)
}
// This is an example of an infinity for loop, the condition i > 0 is always true, so the loop will never end.

for (i = 1; i > 0;) {
    console.log(i)
}
// This is an example of an infinity for loop, because we are not incrementing i.