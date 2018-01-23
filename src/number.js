// Use 0b prefix for binary integer literals
const binaryNumber = 0b0010111011011

// Use 0o prefix for octal integer literals
const octalNumber = 0o7542

// Determine whether number has a decimal part
Number.isInteger(6) // true
Number.isInteger(6.0456) // false

// Approximately 2.2204460492503130808472633361816E-16, or 2-52
// Represents the difference between 1 and the smallest floating point number greater than 1
Number.EPSILON

// Largest integer that can be safely and precisely represented in JavaScript
Number.MAX_SAFE_INTEGER

// Smallest integer that can be safely and precisely represented in JavaScript
Number.MIN_SAFE_INTEGER

// Checks whether number is within the bounds of Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER
Number.isSafeInteger(1232134) // true
Number.isSafeInteger(-56565778) // true
Number.isSafeInteger(213893175370138501310398590317590138497513) // false
