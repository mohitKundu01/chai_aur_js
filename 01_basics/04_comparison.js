
console.log(null>0);  // false
console.log(null==0); // false
console.log(null>=0); // true

// === (strictly check) - check both value + datatype
console.log("1"===1); // false


// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// THat why (3) null >= 0 is true and (1) null > 0 is false;