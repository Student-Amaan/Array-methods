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
  { name: "danish", age: 23 },
  { class: 13, grade: "A" },
];

let allusers = someUser.map((user) => user.class);
console.log(allusers);

// filter() array pawarful method ha . array ka har element per condition lagata ha. our sirf wo element return kardanga gho condition true ha

let elementArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let elementRes = elementArr.filter((elArr) => elArr % 2 == 0);
console.log(elementRes);

const useArr = [
  { name: "danish", age: 22 },
  { name: "alisa", age: 23 },
  { name: "Aman", age: 13 },
];

let finalUser = useArr.filter((usArr) => usArr.age >= 18);
console.log(finalUser)

// forEach() ya b ek array [] method ha. ya sirf loop chalana ka lya hota ha koch return nahi karta;

let bigNumber = [1, 2, 3, 4, 6, 5, 33];

bigNumber.forEach((nm) => {
  console.log(nm * 5);
});

// Real world project ma eysa use hota ha

const useArr1 = [
  { name: "danish", age: 22 },
  { name: "alisa", age: 23 },
  { name: "Aman", age: 13 },
];

useArr.forEach((Uar) => {
  console.log(Uar.name);
});

// find() ya ek array method ha jho array ma sa phala element return karta ha jho given condition ko sitisfied karra sirf phala match return karta ha. aghar na mala tho undefined dhata ha

let findMtd = [30, 25, 2, 77, 64];

const finalFind = findMtd.find((fnd) => fnd > 50);

console.log(finalFind);

// find() real world example

const usFind = [
  { id: 1, name: "danish" },
  { id: 2, name: "aman" },
  { id: 3, name: "waxir" },
];

let allFind = usFind.find((u) => u.id === 2);

console.log(allFind);

let taskArr = [];

function taskadd(add) {
  taskArr.push(add);
}

function deleteTask(del) {
  taskArr.splice(del, 1);
}

taskadd(4, 5, 6, 7, 2, 8, " aman ");

console.log(taskArr);

deleteTask(4);
console.log(taskArr);

let element = document.createElement("li");

element.addEventListener("click", () => {
  console.log("button is clicked");
  element.innerText = "Aman waxir";
});


