/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const peopleHeightsMap = [];

  for (let i = 0; i < names.length; i++) {
    peopleHeightsMap.push({ name: names[i], height: heights[i] });
  }

  return peopleHeightsMap
    .sort((a, b) => b.height - a.height)
    .map((person) => person.name);
};

sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]);
