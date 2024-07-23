import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function Details() {
const dispatch = useDispatch();
const history = useHistory();
const {id} = useParams();
const movies = useSelector(store => store.movies);
const movieDetail = useSelector(store => store.details);
const movieGenres = useSelector(store => store.genres)

console.log('movie details:', movieDetail)
console.log('id:',  id)


useEffect(() => {
    dispatch({type:'SET_DETAILS', payload: id})
}, []);

function handleClick() {
    history.push('/');
}


return (
    <>
<div data-testid="movieDetails">  

<section className="details">
        {movieDetail.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img data-testid="toDetails" src={movie.poster} alt={movie.title} onClick={() => handleClick(movie.id)} />
              <h5>{movie.genres}</h5>
              <p>{movie.description}</p>
            </div>
          );
        })}
        {movieDetail.map(movie=>{
            return(
                <div>
                    <h3>{movie.genres}</h3>
                </div>
            )
        })}
      </section>

<h5>
   {movieDetail.title}
</h5>
<p>{movieDetail.description}</p>
{/* <img {movieDetail.poster}></img> */}
<button onClick={handleClick}  data-testid="toList">Return to Movie List</button>
</div>
</>
);
}

export default Details;