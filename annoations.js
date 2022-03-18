//  Here `: number` is type annotations
// This is say you can only assign a variable apple only `number` value
var apples = 5;
var nothing = undefined;
var hasName = true;
apples = 10;
// apples = "Ten"
// Built in objeects
var noee = new Date();
// Array Notation
// ``string[]` simplay a notaion of color array thar accept only string value
var color = ['red', 'green', 'blue'];
var myNumbers = [1, 2, 3, 4];
var truth = [true, false, true];
color.push('purple');
// CALSS Anotation
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object Literal Annotation
var point = {
    x: 10,
    y: 20
};
// Function Annotation
var logNumber = function (i) {
    console.log(i);
};
// JSON PARSE
var json = '{"x": 20, "y": 10}';
var coordinates = JSON.parse(json);
console.log(coordinates);
// coordinates.kljjlkjkljklj;
// Type `infrence` and `annotation`
var numbers = [-10, -1, -12];
// let numberAboveZero = false // This is type infrence 
var numberAboveZero = false; // This is type `anotation`
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
