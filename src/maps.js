// Maps are a replacement to the common pattern of creating a hash-map using plain JavaScript objects
// Avoids security issues with user-provided keys
// Allows keys to be arbitrary values, you can even use DOM elements or functions as the key to an entry
// Map adheres to the iterable protocol

// Create a map using new Map()
// Use map.set(key, value) to add entries
const map1 = new Map()
map1
  .set('a', 1)
  .set('b', 2)
  .set('c', 3)

// Initialize a map with an iterable like [[key1, value1], [key2, value2]] in new Map(iterable)
const map2 = new Map([['a', 1], ['b', 2], ['c', 3]])

// Use map.get(key) to get an entry
map2.get('a')

// Check for a key using map.has(key)
map2.has('b')
map2.has('d')

// Remove entries with map.delete(key)
map2.delete('c')

// Iterate over map with for (let [key, value] of map), the spread operator, Array.from
for (const [key, value] of map2) {
  console.log(key, value)
}

for (const keys of map2.keys()) {
  console.log(keys)
}

for (const values of map2.values()) {
  console.log(values)
}

console.log(map2.entries())

for (const a of Array.from(map2)) {
  console.log(a[0], a[1])
}
