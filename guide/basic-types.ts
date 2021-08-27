var x: string = 'H';
var y: boolean = true;
var z: number = 2;

// Array
var k: string[] = ['A', 'B', 'C'];

// Function
var sum: (x: number, y: number) => number;

sum = function(x: number, y: number) {
    return x + y;
}

// Object
var person: { name: string; age: number; };

person = {
    name: "Joe",
    age: 46
};

var info: any = { address: '1234 Anywhere St.', city: 'Seattle' };

// Use interface
interface Person {
    name: string;
    age: number;
}

var j: Person = {
    name: "Doe",
    age: 47
};

// Typed arrays
var p: Person[] = [
    {name: 'a', age: 8}
];

p.push({
    name: 'b',
    age: 26
});


