// You can declare strings with `, in addition to " and '
// These are template literals

// Template literals can be multiline
const templateLiteral = `
  Two things awe me most, 
  The starry sky above me,
  The moral law inside me.
`
// Template literals allow interpolation
const madPhilosopher = 'Immanuel Kant'
console.log(`${madPhilosopher} is the father of transcendentalism.`)

// Basically any valid JavaScript expression can be interpolated
const s = 120, t = 2
console.log(`The car is moving at ${ s / t } km/h`)

// TODO: add example
// You can use tagged templates to change how expressions are interpolated
const taggedTemplateLiteral = (literals, inter) => {}
