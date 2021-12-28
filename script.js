String.prototype.vowel = function() {
  return /^([aeiou])+$/i.test(this);
};

console.log("eioua".vowel())
// true

console.log("eika".vowel())
// false
