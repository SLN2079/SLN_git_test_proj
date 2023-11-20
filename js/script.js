"use strict";

let namberOfFilms;

function start(){
    namberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); //первый промт - сколько фильмов посмотрел 

    while (namberOfFilms == '' || namberOfFilms == null || isNaN(namberOfFilms) || namberOfFilms < 0){
        namberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMoovieDB = { //DB
    count:namberOfFilms,
    movies:{},
    actors:{},
    generes:[],
    privat: false
};
    
function rememberMyFilms(){
    for (let i = 0; i < 2; i++ ) {
        const a = prompt ('Назовите один из последних просмотренных фильмов', ''),
              b = +prompt ('оцените этот фильм по шкале от 1-10','');
        if (a !=null && b != null && a != '' && b != '' && a.length < 50){
            personalMoovieDB.movies[a] = b;
        } else {
            i--;
        }  
    };
}
rememberMyFilms();

function detectPersonalLevel(){
    if(personalMoovieDB.count <10){
        alert ('Смотришь мало фильмов');
    }else if (personalMoovieDB.count >=10 && personalMoovieDB.count <=30){
        alert ('больше деяти и меньше тридцати!');    
    } else if (personalMoovieDB.count >30){
        alert('Больше тридцати - дрочер киноман!');
    } else {
        alert ('Хуйня какая-то')
    };
}
detectPersonalLevel();

function showMyDb(){
     if (personalMoovieDB.privat == false) {
     console.log (personalMoovieDB); 
 };
}
showMyDb();

function writeYourGenres(){
    for (let i = 1; i <= 3; i++ ) {
        const genre = prompt (`Ваш любимый жанр под номером ${i}`, '');
        personalMoovieDB.generes[i - 1] = genre; 
    }
};

writeYourGenres();


   



