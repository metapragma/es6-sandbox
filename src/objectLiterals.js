// Property value shorthand
const obj1 = {
  foo: foo
} // is equivalent to
const obj2 = {
  foo
}

// Computed property names
const prefix = 'baz'
const obj3 = { 
  [prefix + 'Foo']: 'bar' 
}
// line 12 becomes baz: 'bar

// You can’t combine computed property names and property value shorthands
const obj4 = { 
  [foo] 
} // is invalid

// Method definitions in an object literal can be declared with a more consice syntax
const obj3 = {
  foo () {
    console.log('bar')
  }
} // is equivalent to
const obj4 = {
  foo: function () {
    console.log('bar')
  }
}
