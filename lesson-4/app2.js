"use strict"

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount(priceAfterDisconut) {
        priceAfterDisconut = this.price / 100 * priceAfterDisconut;
        this.price = this.price - priceAfterDisconut;
    }
}

let obj1 = new Product("prod1", 200);
obj1.make25PercentDiscount(25);
console.log(obj1);