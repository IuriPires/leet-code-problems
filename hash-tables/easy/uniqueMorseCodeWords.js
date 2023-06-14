/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const hashTableAlphabet = new Map();
  const hashTableWords = new Map();
  const transformationsTable = new Map();

  const morseAlpha = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const englishAlpha = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < englishAlpha.length; i++) {
    hashTableAlphabet.set(englishAlpha[i], morseAlpha[i]);
  }

  for (let i = 0; i < words.length; i++) {
    hashTableWords.set(words[i], "");
    for (let j = 0; j < words[i].length; j++) {
      const currentValue = hashTableWords.get(words[i]);

      hashTableWords.set(
        words[i],
        currentValue + hashTableAlphabet.get(words[i][j])
      );
    }

    if (transformationsTable.has(hashTableWords.get(words[i]))) {
      const currentValue = transformationsTable.get(
        hashTableWords.get(words[i])
      );
      transformationsTable.set(hashTableWords.get(words[i]), currentValue + 1);
    } else {
      transformationsTable.set(hashTableWords.get(words[i]), 1);
    }
  }

  return transformationsTable;
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
