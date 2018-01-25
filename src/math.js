// Utility
// Returns the sign of a number, indicating whether the number is positive, negative or zero.
Math.sign(32) // 1
Math.sign(0) // 0
Math.sign(-56) // -1

// Returns the integer part of a number by removing any fractional digits
Math.trunc(16.123) // 16
Math.trunc(-3.98) // -3
Math.trunc(-0.234) // -0
Math.trunc(0.76) // 0

// Exponentiation and Logarithmic
// Returns the cube root of a number
Math.cbrt(8) // 2
Math.cbrt(27) // 3
Math.cbrt(-1) // -1

// Returns e^x - 1, where x is the argument, and e the base of the natural logarithms
Math.expm1(0) // 0
Math.expm1(1) // 1.7182818284590450
Math.expm1(-1) // -0.6321205588285577

// Returns the base 10 logarithm of a number
Math.log10(10000) // 4
Math.log10(100) // 2
Math.log10(1) // 0

// Returns the base 2 logarithm of a number
Math.log2(4) // 2
Math.log2(8) // 3
Math.log2(1) // 0
Math.log2(0) // -Infinity

// Returns the natural logarithm (base e) of 1 + a number
Math.log1p(1) // 0.6931471805599453
Math.log1p(0) // 0
Math.log1p(-2) // NaN

// Bitwise
// Returns the number of leading zero bits in the 32-bit binary representation of a number
// 00000000000000000000000000000001
Math.clz32(1) // 31

// 00000000000000000000000000000100
Math.clz32(4) // 29

// 00000000000000000000001111101000
Math.clz32(1000) // 22

// Compile-to-JS
// The result of the C-like 32-bit multiplication of the given arguments
Math.imul(a, b)

// Returns the nearest 32-bit single precision float representation of a Number
Math.fround(5.5) // 5.5
Math.fround(5.05) // 5.050000190734863

// Trigonometry
