// 10- The this Keyword

/*
This references the object that is executing the current function.

If that function is part of na object we call that function a method.
method ---> this references that object itself

If that function is a regular function, not part of na object.
function ---> this references the global object (which is the window object in browsers and global in node)
*/

const video = {
  title: "a",
  play() {
    console.log(this); // Here this references the object itself, because play is a method in the video object.
  },
};

video.play();

/// We can also add a method and have the same result.
video.stop = function () {
  console.log(this);
};

video.stop();

function playVideo() {
  console.log(this);
}

playVideo(); // Here this is referencing the global object (window in browser, global in node)

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("b");
// We use the constructor function to create a new video object. It's a new video object different from the one above.
// If we call a function using the new keyword this will reference the object created.

const video2 = {
  title: "a",
  tags: ["a", "b", "c"],
  play() {
    console.log(this); // Here this references the object itself, because play is a method in the video object.
  },
  showTags() {
    this.tags.forEach(function(tag) { // If we use a function as a callback function for the forEach method, the this keyword references the global object.
      console.log(this.title, tag);
    }, this); // As a second argument we can pass this keyword. So the this in the callback function references the object itself and not the global object.
  },
};

video2.showTags();
