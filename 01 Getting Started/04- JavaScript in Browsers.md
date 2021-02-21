# 04- JavaScript in Browsers

## Script Html tag

To write JavaScript code in the html file we need a scrip element `<script></script>` .

There two place were we can add a script element, in the `<head>` section or in the `<body>` section.

The best practice is to put the script element in the body section after all the HTML code. Why that best practice:

1. Because the browser parse the html file from top to bottom. If we put the script code in the head section, our browser may get busy parsing and executing that JavaScript code, and wont be able to render the html in the page
2. Because almost always the JavaScript code we put in the script element needs to talk to the html element. So by adding the code in the bottom of the `<body>` section we make sure that all the html is renders first.

There are exception but this are the basic rules.

So in the bottom of the body section we add a script element

In that element we can write JavaScript code.

To add comments to JavaScript we use double forward slashes `//`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Ultimate JavaScript Mastery Series - Part 1</title>
  </head>
  <body>
    <script>
      console.log("hello world");
      // This is a comment
    </script>
  </body>
</html>
```
