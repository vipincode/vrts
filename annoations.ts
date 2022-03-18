
//  Here `: number` is type annotations
// This is say you can only assign a variable apple only `number` value
let apples: number = 5
let nothing: undefined = undefined
let hasName: boolean = true 

apples = 10
// apples = "Ten"

// Built in objeects

let noee: Date = new Date()

// Array Notation
// ``string[]` simplay a notaion of color array thar accept only string value
let color: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3, 4]
let truth: boolean[] = [true, false, true]

color.push('purple')

// CALSS Anotation

class Car {}

let car: Car = new Car()

// Object Literal Annotation

const point: {x: number; y: number} = {
  x: 10,
  y: 20
}

// Function Annotation
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// JSON PARSE

const json= '{"x": 20, "y": 10}'
const coordinates: {x: number, y: number} = JSON.parse(json)
console.log(coordinates)

// coordinates.kljjlkjkljklj;


// Type `infrence` and `annotation`

let numbers = [-10, -1, -12]
// let numberAboveZero = false // This is type infrence 
let numberAboveZero: boolean | number = false // This is type `anotation`
for( let i =0; i < numbers.length; i++) {
  if( numbers[i] > 0 ) {
    numberAboveZero = numbers[i]
  }
}