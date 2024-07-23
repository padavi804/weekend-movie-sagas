const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  console.log("reqparams:", req.params.id )
  // const query = `
  // SELECT * FROM "movies" 
  // JOIN "movies_genres" ON "movies.id" = "movies_genres.movie_id"
  // JOIN "genres" ON "genres.id" = "movies_genres.genre_id";
  // `;
  
  const query = `SELECT 
  movies.id,
  movies.title,
  movies.poster,
  movies.description,
  ARRAY_AGG(genres.name) AS genres
FROM 
  movies
JOIN 
  movies_genres ON movies.id = movies_genres.movie_id
JOIN 
  genres ON movies_genres.genre_id = genres.id
WHERE 
  movies.id = $1
GROUP BY 
  movies.id, movies.title, movies.poster, movies.description;`


  // `SELECT * FROM movies 
	// 	JOIN movies_genres ON movies.id = movies_genres.movie_id 
	// 	JOIN genres ON movies_genres.genre_id = genres.id 
	// 	WHERE movie_id=$1`
  pool.query(query, [req.params.id])
.then(result => {
  console.log('movies result',result.rows);
  res.send(result.rows);
})
.catch(err => {
  console.log('ERROR: Get all movies', err);
  res.sendStatus(500)
})
});

module.exports = router;