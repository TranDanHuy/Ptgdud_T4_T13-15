
let massMark = 78; 
let heightMark = 1.69;
let massJohn = 92; 
let heightJohn = 1.95; 


let BMIMark = massMark / (heightMark ** 2);
let BMIJohn = massJohn / (heightJohn ** 2);


if (BMIMark > BMIJohn) {
    console.log(`Dữ liệu 1: BMI của Mark's  (${BMIMark.toFixed(1)}) là cao hơn của John's (${BMIJohn.toFixed(1)})!`);
} else {
    console.log(`Dữ liệu: BMI của John's (${BMIJohn.toFixed(1)}) là cao hơn của  Mark's (${BMIMark.toFixed(1)})!`);
}


massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;


BMIMark = massMark / (heightMark ** 2);
BMIJohn = massJohn / (heightJohn ** 2);


if (BMIMark > BMIJohn) {
    console.log(`Dữ liệu 2: BMI của Mark's (${BMIMark.toFixed(1)}) là cao hơn của John's (${BMIJohn.toFixed(1)})!`);
} else {
    console.log(`Dữ liệu 2: BMI của John's (${BMIJohn.toFixed(1)}) là cao hơn của Mark's (${BMIMark.toFixed(1)})!`);
}