"use strict";
const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDb = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: [],
    privat: false
};
  
    for(let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDb.movies[a] = b;
        } else{
            console.log('ERROR')
            i--;
        }

        
    }

    console.log(personalMovieDb);

    if(personalMovieDb.count == 0) {
        alert('he is not watch moovies');
    } else if(personalMovieDb.count < 10 && personalMovieDb.count !=0) {
        alert('Недодрочил до 10-ти фильмов');
    }else{ 
        alert('много фильмов смотришь, скоро ослепнешь!');
    
    };

   