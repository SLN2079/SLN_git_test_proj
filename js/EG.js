"use strict";
const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

    personalMovieDb.movies[a] = b;
    personalMovieDb.movies[c] = d; 
    //personalMovieDb.movies[c] = d;

    console.log(personalMovieDb);

    if(numberOfFilms == 0) {
        console.log('he is not read');
    } else {
        console.log('bigger then 0')

    };

//     "use strict";
// const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDb = {
//     count: numberOfFilms,
//     movies: {}, 
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let filmCount = numberOfFilms; filmCount <= 0;){
//     alert("Посмотри хотябы один фильм!");
//     break;   
// }

// if (filmCount == 1){
//     alert("Посмотри хотябы один фильм!");
// } 


//     break;
//     if(filmCount==1){
  
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', ''); 
//     }

// }
// for (let i = 1; i < 10; i++){
//     if (i==6) {
//         //break;
//         continue;
//     }
//     console.log (i);
// } 
// for (filmCount==1;) {
    
//     continue;
    
// }

    //     alert('вы посмотрели всего один фильм');
    //     const a = prompt('Один из последних просмотренных фильмов?', ''),
    //           b = prompt('На сколько оцените его?', '');
    // }
    // if (numberOfFilms >=2){

    // }
    // console.log (i);


// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

//     personalMovieDb.movies[a] = b;
//     personalMovieDb.movies[c] = d; 
//     //personalMovieDb.movies[c] = d;

//     console.log(personalMovieDb);

//     if(numberOfFilms == 0) {
//         console.log('he is not read');
//     } else {
//         console.log('bigger then 0')

//     };
