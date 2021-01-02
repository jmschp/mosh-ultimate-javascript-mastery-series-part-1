// 11- Changing this

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  play() {
    console.log(this); // Here this references the object itself, because play is a method in the video object.
  },
  showTags() {
    this.tags.forEach(function (tag) {
      // If we use a function as a callback function for the forEach method, the this keyword references the global object.
      console.log(this.title, tag);
    }, this); // As a second argument we can pass this keyword. So the this in the callback function references the object itself and not the global object.
  },
};

// The self approach to use the this keyword inside a callback function. It is not a good practice.
const videoSelf = {
  title: "a",
  tags: ["a", "b", "c"],
  play() {
    console.log(this); // Here this references the object itself, because play is a method in the video object.
  },
  showTags() {
    const self = this; // A different approach to use the this method in a function
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

// In JavaScript functions are objects and have different methods we can access
function playVideo(a, b) {
  console.log(this);
}
playVideo(); // Here the this key word references the global object.
playVideo.call({ name: "Miguel" }, 1, 2); // As the first parameter of this method "thisArg", we can pass an object and "this" will reference that object.
playVideo.apply({ name: "Miguel" }, [1, 2]); //It works as the call method. The only difference is that here we pass an array as the second parameter, for the other parameters of the function.
const fn = playVideo.bind({ name: "Miguel" }); // The bind method returns a new function and sets this to point permanently to the object we pass as an argument to bind.
fn();

// The bind approach to use this in the callback function.
const videoBind = {
  title: "a",
  tags: ["a", "b", "c"],
  play() {
    console.log(this); // Here this references the object itself, because play is a method in the video object.
  },
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

//The new solution from ES6 is to use arrow function.
const videoArrow = {
  title: "a",
  tags: ["a", "b", "c"],
  play() {
    console.log(this); // Here this references the object itself, because play is a method in the video object.
  },
  showTags() {
    this.tags.forEach(tag => {// Arrow function inherit this from the containing function
      console.log(this.title, tag);
    });
  },
};
