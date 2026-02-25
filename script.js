/*Topics:

Function Declaration

Arrow Function

Parameters

Return

Practice Task:

1️⃣ Function likho jo 2 numbers add kare
2️⃣ Function likho jo string reverse kare
3️⃣ Function likho jo even number check kare
*/

function add(a, b) {
  return a + b;
}

console.log(add(22, 34));

const reversestr = (str) => {
  return str.split(" ").reverse().join(" ");
};

console.log(reversestr("My name is danish"));

const checkEven = () => {
  let num = 5;

  if (num % 2 == 0) {
    console.log("the number is even");
  } else {
    console.log("the number is odd");
  }
};

console.log(checkEven(5));

let arrCheck = () => {
  let array = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  array.forEach((arr) => {
    if (arr % 2 === 0) {
      console.log("the even is", arr);
    } else {
      console.log("the odd is", arr);
    }
  });
};

console.log(arrCheck());

/**React me arrays bohot use hote hain.

Important Methods:

map()

filter()

forEach()

find() */

// map() ek array method ha Jho her ek element per function chalata ha aur usa ek naya array return karta ha e.g =>

let number = [1, 2, 3, 4, 5, 6, 7];

let result = number.map((num) => num * 2);

console.log(result);

let someUser = [
    { name: "Aman", age: 22 },
    { name: 'danish', age: 23},
    { class: 13 , grade: 'A'}
];

let allusers = someUser.map(user => user.class)
console.log(allusers)

