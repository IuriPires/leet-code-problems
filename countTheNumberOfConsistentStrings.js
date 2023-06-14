/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

var countConsistentStrings = function (allowed, words) {
  let notAllowed = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (!allowed.includes(words[i][j])) {
        notAllowed += 1;
        i++;
      }
    }
  }

  return words.length - notAllowed;
};
