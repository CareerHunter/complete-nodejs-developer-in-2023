function Foo(name, price) {
    this.name = name;
    this.price = price
}

const myThing = new Foo('gas', 45);

console.log('myThing: ', myThing)
console.log('myThing.constructor.prototype: ', myThing.constructor.prototype);

const myLiteralObj = {
    name: 'shuhan',
    age: 8
}

console.log('myLiteralObj: ', myLiteralObj)
console.log('myLiteralObj.constructor.prototype: ', myLiteralObj.constructor.prototype);

const myCreatb = Object.create(myLiteralObj);
console.log("Object.Create: ", myCreatb );

fetch('http://localhost:3000/friends', {
    method: 'POST',
    body: JSON.stringify({id: 3, name: 'Ryan Dahl'})
});