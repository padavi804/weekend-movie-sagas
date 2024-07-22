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


useEffect(() => {
    dispatch({type:'SET_DETAILS', payload: movieDetail})
}, []);

function handleClick() {
    history.push('/');
}


return (
<div data-testid="movieDetails">
<h1>{movies.title}</h1>
{/* <img {movieDetail.poster}></img> */}
<button onClick={handleClick}  data-testid="toList">Return to Movie List</button>
</div>

);
}

export default Details;