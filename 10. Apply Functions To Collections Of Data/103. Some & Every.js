// every and some take a boolean callback and give us a boolean result
let words = ["dog", "dig", "log", "bag", "wag"];

// To check if all the words are exactly of length 3
const all3Lets = words.every((word) => word.length === 3);

// To check if all the words end in 'g'

const allEndInG = words.every((word) => word[word.length - 1] === "g");

// some

// To check if some word starts with 'd'

const someStartWithD = words.some((word) => word[0] === "d");
