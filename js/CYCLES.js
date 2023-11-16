"use strict";


let number = 50;
let num2 = 35;

console.log ('while');

while(number <= 55) {
    console.log (number);
    number++;
};

console.log ('!!DO!!');

do {
    console.log(num2);
    num2++;
}
while (num2 < 55);

console.log ('FOR');

for (let i = 1; i < 8; i++){
    console.log (i);
} 

for (let i = 1; i < 10; i++){
    if (i==6) {
        //break;
        continue;
    }
    console.log (i);
} 