// Write a function that takes a number and outputs the reverse

// reverse(1234)
// >>> 4321

// reverse(9103)
// 3019

function reverse(number) {
    const original = String(number)
    let output = ''

    for (let i = original.length - 1; i >= 0; i--) {
        output += original[i]
    }

    return output
}

console.log(reverse(99840))
