"use strict"

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    if (text.length > 0) {
        this.text = text;
    }
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

let obj1 = new AttachedPost("Alex", "lorem", new Date());
obj1.makeTextHighlighted();
obj1.edit("another lorem");
console.log(obj1);