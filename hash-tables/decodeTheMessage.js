/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const subTable = new Map();
  let descriptedMessage = "";
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let pointer = 0;
  for (let i = 0; i < key.length; i++) {
    if (key[i] === " ") {
      subTable.set(" ", " ");
      continue;
    }
    if (!subTable.has(key[i]) && pointer <= 25) {
      subTable.set(key[i], alphabet[pointer]);
      pointer += 1;
    } else if (pointer > 25) {
      break;
    } else {
      continue;
    }
  }

  for (letter of message) {
    if (letter === " ") {
      descriptedMessage += " ";
    } else {
      descriptedMessage += `${subTable.get(letter)}`;
    }
  }

  return descriptedMessage;
};

console.log(
  decodeMessage(
    "eljuxhpwnyrdgtqkviszcfmabo",
    "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  )
);
