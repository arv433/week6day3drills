// Write a function that takes two arguments, an array and any value.
// Return the sum of the last element in the array and the second argument.

// baz([1, 2, 3], 1)
// >>> 4

// baz(['a', '2', 'c'], true)
// >>> 'ctrue'

// baz([5, 6, 2, 4], 5)
// >>> 9

function baz(array, value) {
    return array[array.length - 1] + value
}

console.log(baz([1, 2, 3], 1))
console.log(baz(['a', '2', 'c'], true))
console.log(baz([5, 6, 2, 4], 5))
