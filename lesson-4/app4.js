"use strict"

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        if (text.length > 0) {
            this.text = text;
        }
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let obj1 = new AttachedPost("Alex", "lorem", new Date());
obj1.makeTextHighlighted();
obj1.edit("another lorem");
console.log(obj1);