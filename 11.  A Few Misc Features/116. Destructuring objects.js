/**
 * We can also destructure objects
 */
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

// The name of the variable must be the same as some key in the object
const { first, last, country } = runner;

console.log(first, last, country);

// If we pass a variable name which is not a key in the object, then we get undefined stored in it

const { title, time } = runner; // time would be undefined

// If we want our variable names to be different than our key name, then we can use semicolon
const { country: nation, title: honorific } = runner;
