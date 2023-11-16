"use strict";

const a = 100,
      b = 500,
      c = 150;
console.log(a,b,c);

if((a+ b+ c) > 100){
    console.log("fuck you");
} else if ((a +b +c) == 100){
    console.log("UAU");
} else {
    console.log(a+ b+ c);
};

((a+ b+ c) == 300) ? console.log('Отсоси у трактариста') : console.log('Не соси у тракториста');// тернарный оператор

let numSum = (a +b +c);
console.log('Теперь свитч');
switch(numSum) {
    case 100:
        console.log('По сто');
        break;
    case 200:
        console.log('ДВЕСТО');
        break;
    case 300:
        console.log('Сделай то что написано выше');
        break;
    default :
    console.log('Дефолт');
        break;
        
}

