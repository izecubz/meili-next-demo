const { MeiliSearch } = require('meilisearch');
const movies = require('./moviedata.json');
require('dotenv').config();

console.log('[MEILISEARCH] - Seeding Database with demo movie data.');

const client = new MeiliSearch({
    host: process.env.NEXT_PUBLIC_MEILISEARCH_HOST,
    apiKey: process.env.MEILISEARCH_PRIVATE_KEY
});

const indexArr = [];

movies.forEach((movie, index) => {
    indexArr.push({
        id: index,
        genres: movie.info.genres,
        title: movie.title,
        year: movie.year,
        image_url: movie.info.image_url ?
            movie.info.image_url.replace(/^http:\/\//i, 'https://')
            : 'http://localhost:3000/no-image-400x400.png',
        rating: movie.info.rating,
        release_date: movie.info.release_date,
    })
})

if (indexArr.length < 1) throw new Error('No movies found.');

client.index('movies').addDocuments(indexArr)
    .then((res) => {
        console.log(res);
        console.log('[MEILISEARCH] - Database seeded.');
    })
    .catch((err) => console.log(err));

