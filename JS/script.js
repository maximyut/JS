"use strict";
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов посмотрел?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов посмотрел?', '');
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};




function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько вы его оцените?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      i--;
      console.log('error');
    }
  }
}

// rememberMyFilms();

// let i = 0;

// while (i < 2) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько вы его оцените?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     i--;
//     console.log('error');
//   }
//   i++;
// }

// do {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько вы его оцените?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     i--;
//     console.log('error');
//   }
// //   i++;
// } while (i < 2);



function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы кассический зритель');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
  } else {
    alert('произошла ошибка');
  }
}

// detectPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш люимый жанр под номером ${i}`, '');
  }
}

writeYourGenres();



function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  } else {
    alert('Ошибка доступа');
  }
}

showMyDB(personalMovieDB.privat);