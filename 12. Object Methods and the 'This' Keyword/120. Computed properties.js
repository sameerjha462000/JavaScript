const role = "host";
const person = "Jools Holland";
const role2 = "Director";
const person2 = "James Cameron";

const team = {};

// Method 1
team[role] = person;
team[role2] = person2;

// Method 2 -- method of computed properties
const obj = { [role]: person, [role2]: person2 };
