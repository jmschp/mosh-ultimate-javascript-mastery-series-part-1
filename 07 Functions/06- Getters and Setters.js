// 06- Getters and Setters

/*
Getters
The get syntax binds an object property to a function that will be called when that property is looked up.

Description
Sometimes it is desirable to allow access to a property that returns a dynamically computed value,
or you may want to reflect the status of an internal variable without requiring the use of explicit method calls.
In JavaScript, this can be accomplished with the use of a getter.

It is not possible to simultaneously have a getter bound to a property and have that property actually hold a value,
although it is possible to use a getter and a setter in conjunction to create a type of pseudo-property.


Setters
The set syntax binds an object property to a function to be called when there is an attempt to set that property.

Description
In JavaScript, a setter can be used to execute a function whenever a specified property is attempted to be changed.
Setters are most often used in conjunction with getters to create a type of pseudo-property.
It is not possible to simultaneously have a setter on a property that holds an actual value.
*/

const person = {
    firstName: 'Miguel',
    lastName: 'Pimenta',
    get fullName() {
        return `${this.firstName} ${this.lastName}` 
    },
    set fullName(name) {
        const nameParts = name.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
}

console.log(person.fullName); // Here we print Miguel Pimenta using the getter

person.fullName = 'Viviane Sedola' // Here with the setter we modify the full name to Viviane Sedola

console.log(person.fullName) // Now with the getter the result is Viviane Sedola
console.log(person)