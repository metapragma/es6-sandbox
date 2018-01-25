// Creates a new Array instance from an array-like (objects with a length property and indexed elements)
// or iterable objects (objects where you can get its elements)
Array.from('jesse') // ['j', 'e', 's', 's', 'e']

const map1 = new Map([[1, 2], [6, 7], [2, 19]])
Array.from(map1) // [[1, 2], [6, 7], [2, 19]]

const f = () => Array.from(arguments)
f(1, 2, 3, 4) // [1, 2, 3, 4]

// Also possible to pass a "map" function as 2nd argument which executes on each element being created
Array.from([1, 2, 3, 4, 5, 6], x => x * x)

// Creates a new Array instance with a variable number of arguments
// regardless of number or type of the arguments
Array.of(12) // [12]
Array.of(1, 2, 3, 4) // [1, 2, 3, 4]

// note that this is different from
Array(12) // which just creates an empty array with length 12

// Array.prototype.copyWithin

// Array.prototype.fill

// Returns the value of the first element in the array that satisfies the provided testing function
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array1.find(x => x > 5) // 6

// Returns the index of the first element in the array that satisfies the provided testing function
array1.findIndex(x => x > 5) // 5 (the index of number 6)

// Returns a new Array Iterator object that contains the keys for each index in the array
const array2 = [1, 2, 3, 4, 5]
const keyIterator = array2.keys()
keyIterator.next() // { value: 0, done: false }
keyIterator.next() // { value: 1, done: false }
keyIterator.next() // { value: 2, done: false }
keyIterator.next() // { value: 3, done: false }
keyIterator.next() // { value: 4, done: false }
keyIterator.next() // { value: undefined, done: true }

// Returns a new Array Iterator object that contains the values for each index in the array
// const array3 = [3, 5, 12, 6, 7]
// const valueIterator = array3.values()
// valueIterator.next() // { value: 3, done: false }
// valueIterator.next() // { value: 5, done: false }
// valueIterator.next() // { value: 12, done: false }
// valueIterator.next() // { value: 6, done: false }
// valueIterator.next() // { value: 7, done: false }
// valueIterator.next() // { value: undefined, done: true }

// Returns a new Array Iterator object that contains the key/value pairs for each index in the array
const array4 = ['a', 'b', 'c', 'd', 'e']
const entriesIterator = array4.entries()
entriesIterator.next() // { value: [0, 'a'], done: false }
entriesIterator.next() // { value: [1, 'b'], done: false }
entriesIterator.next() // { value: [2, 'c'], done: false }
entriesIterator.next() // { value: [3, 'd'], done: false }
entriesIterator.next() // { value: [4, 'e'], done: false }
entriesIterator.next() // { value: undefined, done: true }

// The initial value of the @@iterator property is the same function object as the initial value of the values() property
const array5 = [1, 2, 3, 4, 5]
const symbolIterator = array5[Symbol.iterator]()
symbolIterator.next() // { value: 1, done: false }
symbolIterator.next() // { value: 2, done: false }
symbolIterator.next() // { value: 3, done: false }
symbolIterator.next() // { value: 4, done: false }
symbolIterator.next() // { value: 5, done: false }
symbolIterator.next() // { value: undefined, done: true }
