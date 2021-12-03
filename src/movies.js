const movies = require("./data")


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// 
function getAllDirectors(someArray) {

mappedArray = someArray.map((movie) => {
  return movie.director;
})

mappedArray.reduce((prev, curr) => {
  if (prev === curr) {
    mappedArray.splice(curr, 1);
  }
}, "whatever"
)

return mappedArray;
}

console.log(getAllDirectors(movies))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(randomArray) {

 const newArray = randomArray.filter((elem) => {
   return elem.director === "Steven Spielberg" && elem.genre.includes("Drama");
 })
 return newArray.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(genericArray) {

if (!genericArray.length) return 0;

else {

let sumArray = genericArray.map((elem) => {
  return elem.score;
})

sumArray = sumArray.reduce((prev, curr) => {
  return prev + curr;
});

sumArray = sumArray / genericArray.length;

return Math.round(sumArray *100) / 100;
}
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(aRandomArray) {

  dramaMovies = aRandomArray.filter((elem) => {
    return elem.genre.includes("Drama")
  })

  if (!dramaMovies.length) return 0;

  else {

let averageDramaArray = dramaMovies.map((elem) => {
  return elem.score;
})

averageDrama = averageDramaArray.reduce((prev, curr) => {
  return prev + curr;
}
)
console.log(averageDrama)
return Math.round(averageDrama / dramaMovies.length * 100) / 100;
}
}

console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(anArrayAgain)
 {
   const anArrayAgain2 = [...anArrayAgain];
   const arrayYear = anArrayAgain2.sort((a, b) => (a.year > b.year) ? 1 : -1);
   return arrayYear;
  }

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayMovies) {

  const arrayAlphabet = arrayMovies.sort((a, b) => (a.title > b.title) ? 1 : -1);
  return arrayAlphabet;

}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
