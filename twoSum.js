var twoSum = function (nums, target) {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(complement, "complement");
    if (numsMap.has(complement)) return [numsMap.get(complement), i];
    numsMap.set(nums[i], i);
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
