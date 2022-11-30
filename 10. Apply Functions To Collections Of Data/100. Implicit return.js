// implicit return 

const square1 = function (num){
    return num * num;  
};

const square2 = (num) => {
    return num * num;  
};

const square3 = num => {
    return num * num;
};

const square4 = num => (
    num * num // do not use return statement and do not use semicolon here
);

const square5 = num => num * num;

console.log(square1(45));
console.log(square2(45));
console.log(square3(45));
console.log(square4(45));
console.log(square5(45));




