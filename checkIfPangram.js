/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const hashTable = new Map();

  for (let i = 0; i < sentence.length; i++) {
    if (!hashTable.has(sentence[i])) {
      hashTable.set(sentence[i], 1);
    }
  }
  for (letter of alphabet) {
    if (hashTable.get(letter) >= 1) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
