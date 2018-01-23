// Set lets you store unique values of any type, whether primitive values or object references
// Similar to Map, but not quite the same
// Set doesn’t have keys, there’s only values
// A value in the Set may only occur once; it is unique in the Set's collection
// Sets can’t have duplicate values because the values are also used as keys

const set = new Set([1, 2, 3, 4, 5])

// retrieve size of set
console.log(set.size)

// append to element to set
set.add(6)

// Returns a new Iterator object that contains an array of [value, value] for each element in the Set object,
// In insertion order, that is
set.entries()

// Returns a new Iterator object that contains the values for each element in the Set object in insertion order
console.log(set.values())

// Same as the Set.prototype.values()
console.log(set.keys())

// Callback is called for each value, in insertion order
set.forEach(num => num * num)

// Returns a boolean based on whether given element is present in set
console.log(set.has(3))

// Removes given element from set
set.delete(4)

// Removes all elements from set
set.clear()
