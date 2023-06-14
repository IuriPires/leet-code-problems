// with while
var validateSubsequence = function (array, sequence) {
  let arrIndex = 0;
  let seqIndex = 0;

  while (arrIndex < array.length && seqIndex < sequence.length) {
    if (array[arrIndex] === sequence[seqIndex]) {
      seqIndex += 1;
    }
    arrIndex += 1;
  }
  return seqIndex === sequence.length;
};

console.log(validateSubsequence([1, 3, 4, 7], [7, 7]));
