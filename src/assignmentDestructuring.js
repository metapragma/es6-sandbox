const { foo } = bar // is equivalent to
const foo = bar.foo

const { foo: baz } // is equivalent to 
const baz = bar.foo

// You can provide default values 
const { foo = 'bar' } = baz // note that this yields foo: 'bar' if baz.foo is undefined

// You can pull as many properties as you like, aliased or not
const { foo, bar: baz } = { foo: 0, bar: 1 } // reutrns you foo: 0 and baz: 1

// You can go deeper.
const { foo: { bar } } = { foo: { bar: 'baz' } } // returns bar: 'baz'

// You can alias that too 
const { foo: { bar: nested } } = { foo: { bar: 'baz' } } // returns nested: 'baz'

// Properties that aren’t found yield undefined as usual
const {foo} = {}

// Deeply nested properties that aren’t found yield an error
const { foo: { bar } } = {}

// It also works for arrays
[a, b] = [0, 1] // returns a: 0 and b: 1

// You can skip items in an array
[a, , b] = [0, 1, 2] // returns a: 0 and b: 2

// You can swap without a “tmp” variable
[a, b] = [b, a]

// You can also use destructuring in function parameters
const foo = (bar = 2) => bar + 1

// The defaults can be objects 
const foo = (bar = { a: 1, b: 2 }) => {}

// Also possible to destructure bar completely
const foo = ({ a = 1, b = 2 }) => {}

// Lastly, default to an empty object if nothing is provided
const foo = ({ a = 1, b = 2 } = {}) => {}
