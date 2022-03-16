
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

// Object Literal

const point: {x: number; y: number} = {
  x: 10,
  y: 20
}