/* 
Write a function called `fill` that takes two arguments. 
The first argument is a value called `value`.
The second argument is an integer called `times`.
Return an array of `value`s that repeat `times` times.
*/

// fill(1, 5)
// >>> [1, 1, 1, 1, 1]

// fill(true, 3)
// >>> [true, true, true]

function fill(value, times) {
    const output = [];

    for (let i = 0; i < times; i++) {
        output.push(value);
    }

    return output;
}

console.log(fill(true, 3));
