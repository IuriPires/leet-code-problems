/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const setNums1 = new Set(nums1);
  const setNums2 = new Set(nums2);
  const ans = [[], []];

  for (let i = 0; i < nums1.length; i++) {
    if (!setNums2.has(nums1[i])) {
      ans[0].push(nums1[i]);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!setNums1.has(nums2[i])) {
      ans[1].push(nums2[i]);
    }
  }

  ans[0] = Array.from(new Set(ans[0]));
  ans[1] = Array.from(new Set(ans[1]));

  return ans;
};

findDifference([1, 2, 3], [2, 4, 6]);
