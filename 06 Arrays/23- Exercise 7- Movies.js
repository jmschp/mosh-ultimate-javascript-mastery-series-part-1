// 23 - Exercise 7 - Movies

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
]

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

movies.sort((a, b) => {
    const ratingA = a.rating
    const ratingB = b.rating
    if (ratingA > ratingB) return -1;
    if (ratingA < ratingB) return 1;
    if (ratingA === ratingB) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        if (a.title.toLowerCase() === b.title.toLowerCase()) return 0;
    }
});

const filteredMovies = movies.filter(movie => movie.rating > 4 && movie.year === 2018);
console.log(filteredMovies)

filteredMovies.forEach(movie => console.log(movie.title));

// Mosh solution

const moviesMosh = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
]

const titles = moviesMosh
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles);