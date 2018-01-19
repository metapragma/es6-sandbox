// Expression bodies
const evens = []
for (let i = 0; i < 100; i += 1) {
  if (i % 2 === 0) {
    evens.push (i)
  }
}
const odds = evens.map(v => v + 1)
const nums = evens.map((v, i) => v + i)

// Statement bodies
const fives = []
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v)
})

// Lexical this
// Unlike functions, arrows share the same lexical this as their surrounding code
const bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(friend =>
      console.log(this._name + " knows " + friend))
  }
}
bob._friends.push('rob', 'lucy', 'jack')
bob.printFriends()

// Lexical arguments
// If an arrow is inside another function, it shares the “arguments” variable of its parent function.
function square() {
  console.log(arguments)
  let example = () => {
    let numbers = []
    for (let number of arguments) {
      numbers.push(number * number)
    }

    return numbers
  }

  return example()
}

square(2, 4, 7.5, 8, 11.5, 21) // returns: [4, 16, 56.25, 64, 132.25, 441]
