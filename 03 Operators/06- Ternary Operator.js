// 06- Ternary Operator

/*
The Ternary operator also know as conditional operator, assigns a value to a variable based on a condition.
First we set a variable with a comparison operator, thats our condition.
Them add a "?" followed by the the value if the condition is true, them after the ":" the value if the condition is false. 
let variable name = (condition) ? value1 : value2
let voteable = (age < 18) ? "Too young" : "Old enough";
Example explained: If the variable "age" is a value below 18, the value of the variable "voteable" will be "Too young", otherwise the value of voteable will be "Old enough".
*/

/*
If a costumer has more than 100 points
They are "gold" costumer, otherwise they are silver consumer
*/

let costumerPoints = 110;
let typeCostumer = costumerPoints > 100 ? 'gold' : 'silver'
console.log(typeCostumer)