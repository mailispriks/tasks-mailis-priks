const movieData = require('./moviedata.json')

movieData.map(movie => {
  movie.Year = +movie.Year
  movie.imdbRating = +movie.imdbRating
  movie.imdbVotes = +(movie.imdbVotes.replace(/,/g, ''))
  movie.Actors = movie.Actors.split(', ')
})

// console.log('movie', movieData)
// FUNCTIONS

function findBestRating (array) {
  return array.reduce((previousValue, currentValue) => {
    if (previousValue.imdbRating > currentValue.imdbRating) {
      return previousValue 
    } else {
      return currentValue
    }
  })
}

function getRatingText (movie, startingText) {
  let string = startingText + ' is '
  string += movie.Title
  string += ', directed by '
  string += movie.Director
  string += ' and was released in '
  string += movie.Released + '.'

  return string
}

function findMostRated (array) {
  return array.reduce((previousValue, currentValue) => {
    if (previousValue.imdbVotes > currentValue.imdbVotes) {
      return previousValue 
    } else {
      return currentValue
    }
  })
}

// EX 1
console.log('Ex 1')

const moviesBetween = movieData.filter(movie => {
  if (movie.Year >= 1962 && movie.Year <= 1972) {
    return movie
  }
})

const bestRating = findBestRating(moviesBetween)
const mostRated = findMostRated(moviesBetween)

const bestRatingString = getRatingText(bestRating, 'Best rated movie')
const mostRatedString = getRatingText(mostRated, 'Most rated movie')

console.log(bestRatingString)
console.log(mostRatedString)

// Ex 2
console.log('Ex 2')

const includesDrama = movieData.filter(movie => {
  if (movie.Genre.includes('Drama')) {
    return movie
  }
})

const bestRatingDrama = findBestRating(includesDrama)
const mostRatedDrama = findMostRated(includesDrama)

const bestRatingDramaString = getRatingText(bestRatingDrama, 'Best rated drama')
const mostRatedDramaString = getRatingText(mostRatedDrama, 'Most rated drama')
console.log(bestRatingDramaString)
console.log(mostRatedDramaString)

// Ex 3
console.log('Ex 3')

const ratedR = movieData.filter(movie => {
  if (movie.Rated === 'R') {
    return movie
  }
})

// console.log('ratedR', ratedR)

const ratedRTitles = ratedR.map(movie => {
  return movie.Title
})

console.log('ratedRTitles', ratedRTitles)

// 1. With for loop
// let ratedRString = 'Movies that are rated R are: '
// for (let i = 0; i < ratedRTitles.length; i++) {
//   const ending = i + 1 === ratedRTitles.length
//   if (ending) {
//     ratedRString += ratedRTitles[i] + '.'
//   } else {
//     ratedRString += ratedRTitles[i] + ', '
//   }
// }

// 2. toString
// let ratedRString = 'Movies that are rated R are: '
// ratedRString += ratedRTitles.toString() + '.'

// 3. join
let ratedRString = 'Movies that are rated R are: '
ratedRString += ratedRTitles.join(', ') + '.'

console.log(ratedRString)

let actors = []
ratedR.map(movie => {
  movie.Actors.map(actor => {
    actors.push(actor)
  })
})

let uniqueActors = [...new Set(actors)];

// console.log('uniqueActors', uniqueActors)

let actorString = 'Actors that played in those movies: '
actorString += uniqueActors.join(', ') + '.'

console.log(actorString)
