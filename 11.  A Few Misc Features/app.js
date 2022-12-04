/**
 * We can also destructure in function parameters
 */
function print([first, , , last]) {
  console.log(first, last);
}

print([1, 2, 3, 5]);

function printName({ first, last }) {
  console.log(`${first} ${last}`);
}

printName({ first: "Abhishek", last: "Amrusha" });
