# 05- Separation of Concerns

Although we can write the JavaScript code in the `<script>` element of html. We usually don't do that because we may have a lot of line of code, and that would mess the html file.

This is a programing principles **Separation of Concerns**.

We want to separate the html code that is about content, from the JavaScript code that is about behavior.

We create a .js file, in our case `index.js`, and write the JavaScript code to it. Separating it from the html.

Now in the `<script>` section of the html we need to reference that .js file.

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
    <script src="index.js"></script>
  </body>
</html>
```
