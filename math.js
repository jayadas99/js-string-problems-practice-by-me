const result = Math.pow(3, 8);
// console.log(result);
// let marks of 2 people are 25, 45. if gap less than 5 they can be friends.
const num1 = 25;
const num2 = 45;

// const gap = num1 - num2;
// console.log(gap);

const gap = Math.abs(num1 - num2);
console.log(gap);



if(gap < 5){
    console.log("you guys can be friends");
}
else{
    console.log("you guys can stay apart");
}



// ------------------------------
// -----------------------

// const number = 2.4598;
// const fullNumber = Math.round(number);
// console.log(fullNumber);

const number = 2.5598;
const fullNumber = Math.round(number);
console.log(fullNumber);

const result2 = Math.ceil(2.00001);
console.log(result2);

const result3 = Math.floor(456.259);
console.log(result3);


// ------------
// random

console.log(Math.random());

// const random = Math.random()*100;
//     console.log(random);


// const random = Math.round(Math.random()*100);
//     console.log(random);

// const random = Math.round(Math.random()*6);
//     console.log(random);

for(i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}