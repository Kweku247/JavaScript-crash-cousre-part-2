let num1 = 10
let num2 = 20
//LOGICAL OPERATORS
let num3 = "10"
let word1 = "Hello";
let word2 = "hello";

console.log(num1 < num2); //less than
console.log(num1 > num2); //greater than
console.log(num1 <= num2); //less than or equal to
console.log(num1 >= num2); //greater than or equal to 
console.log(!true); //not true
console.log(!false); //not false.  ! means not
console.log(num1 == num3);
console.log(num1 === num3); // equality check
console.log(word1 === word2); 
console.log(word1 != word2);  //not equal to 

// CONTROL FLOW
let item = "U2";
if (item === "Annapurna") {
    console.log("Buy Annapurna");
} else if (item === "U2"){
    console.log("Buy U2");
}

// Grading system
let ,score = 900;
if (score>= 90){
    console.log("Excellent");
} else if (score>= 80){
    console.log(VeryGood);
}else if(score>= 70){
    console.log("Good");
} else if (score >= 60){
    console.log("credit");
} else if (score>= 40);{
    console.log("pass");
}  if (score>= 0){
    console.log("fail");
}



let score = 100;
if (score >= 0 &&  100){
 if (score >= 90){
    console.log("Excellent");
 }else if (score >= 80);{
    console.log("very good")
 }
}

FUNCTION
function sum(a, b){
    let total = a + b;
    return total;
}
 let  thirteen =sum(5,8)
 let evelen = sum(4,7)
 let eight =sum(2,6)

 function multiply(_a, _b ){
 }
let sixteen =multiply (4, 4)
let twentyone =multiply (3, 7)
let thirty =multiply (5, 6)



//LOOPS

for(let i =1;i <= 100; i++){
    console.log(i);
}
// while loop
let num =1 ;
while (num<= 10){
    console.log(num);
    num = num +1;
}

let age = 1;
 do{
    console.log("You cant vote  ")
    age++;
 }while (age < 18);

// Array methods
let ages =[23,54,89,200,40,567,20,3,12,18]


// Filter
for (let age of ages){
    console.log(Math.pow(age, 2) );
}

 let marriage = ages.filter(function (num){
    return num > 25
 });
 console.log(marriage);

 //Map
 let squares = ages.map((age)=> age * age );
 console.log(squares);

 //find
 let eighteen = ages.find((age)=> age == 18)
 console.log(eighteen)