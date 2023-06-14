/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;

  const stringMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (stringMap.has(s[i])) {
      const count = stringMap.get(s[i]);
      stringMap.set(s[i], count + 1);
      continue;
    }
    stringMap.set(s[i], 0);
  }

  console.log(stringMap);
};

console.log(lengthOfLongestSubstring("abcabcbb"));
