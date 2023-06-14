// iterativy solution
var numIdenticalPairs = function (nums) {
  let countPair = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) countPair += 1;
    }
  }

  return countPair;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

// Hash mapped solution

var numIdenticalPairs = function (nums) {
  let countPair = 0;
  const numsMap = new Map();
  const sortedNumber = nums.sort();

  for (let i = 0; i < sortedNumber.length; i++) {
    if (!numsMap.has(sortedNumber[i])) {
      numsMap.set(sortedNumber[i], 1);
    } else {
      countPair += numsMap.get(sortedNumber[i]);
      const currentValue = numsMap.get(sortedNumber[i]);
      numsMap.set(sortedNumber[i], currentValue + 1);
    }
  }

  return countPair;
};
