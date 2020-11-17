const numberOfFilms = +prompt('Сколько фильмов посмотрел?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько вы его оцените?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     i--;
//     console.log('error');
//   }
// }

let i = 0;

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

do {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько вы его оцените?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    i--;
    console.log('error');
  }
  i++;
} while (i < 2);

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert('Вы кассический зритель');
} else if (personalMovieDB.count >= 30) {
  alert('Вы киноман');
} else {
  alert('произошла ошибка');
}

console.log(personalMovieDB);