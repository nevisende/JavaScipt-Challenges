const obj = {};

function isEmpty(obj) {
    // write your solution here

    return obj
    && Object.keys(obj).length === 0
    && Object.getPrototypeOf(obj) === Object.prototype
}

console.log(`is empty object: ${isEmpty(obj)}`)
