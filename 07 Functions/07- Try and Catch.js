// 07- Try and Catch

/*
The try...catch statement marks a block of statements to try and specifies a response should an exception be thrown.

Syntax
try {
  try_statements
}
catch (exception_var) {
  catch_statements
}
finally {
  finally_statements
}

Description
The try statement consists of a try-block, which contains one or more statements.
{} must always be used, even for single statements. At least one catch-block, or a finally-block, must be present. This gives us three forms for the try statement:

try...catch
try...finally
try...catch...finally

A catch-block contains statements that specify what to do if an exception is thrown in the try-block.
If any statement within the try-block (or in a function called from within the try-block) throws an exception, control is immediately shifted to the catch-block.
If no exception is thrown in the try-block, the catch-block is skipped.

The finally-block will always execute after the try-block and catch-block(s) have finished executing.
It always executes, regardless of whether an exception was thrown or caught.

You can nest one or more try statements. If an inner try statement does not have a catch-block, the enclosing try statement's catch-block is used instead.

You can also use the try statement to handle JavaScript exceptions.
*/

const person = {
  firstName: "Miguel",
  lastName: "Pimenta",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    if (typeof name !== "string") throw new Error("Name is not a string"); // Here we throw an exception if the type of the user entry is not a string.
    const nameParts = name.split(" ");
    if (nameParts.length !== 2) throw new Error("Enter a first and last name");
    if (nameParts.length) this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  },
};

try {
  person.fullName = null;
} catch (error) {
  console.error(error);
} // finally {
//   console.log('Restart')
// }

try {
  person.fullName = "";
} catch (error) {
  console.error(error);
} // finally {
//   console.log('Restart')
// }
