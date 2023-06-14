/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let hash = new Map();
  let sorted = nums.sort((a, b) => a - b);

  sorted.forEach((number, idx) =>
    hash.has(number) ? null : hash.set(number, idx)
  );
  return nums.map((x) => hash.get(x));
};

console.log(smallerNumbersThanCurrent([4, 3, 2, 1]));
