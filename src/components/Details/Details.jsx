import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function Details() {
const dispatch = useDispatch();
const history = useHistory();
const {id} = useParams();
const movieDetail = useSelector(store => store.movies);
const movieGenre = useSelector(store => store.genres);
console.log('movie details:', movieDetail)

function handleClick() {
    history.push('/');
}

useEffect(() => {
    dispatch({type:'GET_GENRES', payload:{id}})
}, []);

return (
<div data-testid="movieDetails">
<h1>{movieDetail.title}</h1>
<button onClick={handleClick}  data-testid="toList">Return to Movie List</button>
</div>

);
}

export default Details;