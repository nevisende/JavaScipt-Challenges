const number = '+919876543210';

function validateMobile(number) {
    // write your solution here

    return number.replace(/^\+91/g,'').replace(/^[0|+]/,'').length 
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
