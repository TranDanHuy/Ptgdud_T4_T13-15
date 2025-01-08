
let massMark = 78; 
let heightMark = 1.69; 
let massJohn = 92; 
let heightJohn = 1.95; 

let BMIMark = massMark / (heightMark ** 2);
let BMIJohn = massJohn / (heightJohn ** 2);

let markHigherBMI = BMIMark > BMIJohn;

console.log("Dữ liệu 1:");
console.log("BMI của Mark's:", BMIMark);
console.log("BMI của John's :", BMIJohn);
console.log("Chỉ số BMI của Mark có cao hơn John không?", markHigherBMI);

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark ** 2);
BMIJohn = massJohn / (heightJohn ** 2);

markHigherBMI = BMIMark > BMIJohn;

console.log("Dữ liệu 2:");
console.log("BMI của Mark's:", BMIMark);
console.log("BMI của John's:", BMIJohn);
console.log("Chỉ số BMI của Mark có cao hơn John không?", markHigherBMI);
