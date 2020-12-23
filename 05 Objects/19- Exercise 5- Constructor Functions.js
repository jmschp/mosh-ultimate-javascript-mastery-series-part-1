// 19- Exercise 5- Constructor Functions


function Post(title, body, author, isLive=false) {
    this.title = title;
    this.body = body;
    this.author = author;
};



function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
};