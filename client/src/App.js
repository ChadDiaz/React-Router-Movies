import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList'
import { Switch , Route, useHistory } from 'react-router-dom'

import SavedList from './Movies/SavedList';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          // console.log("Movie List -->" , response)
          // console.log("response" , response)
          return setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  // console.log("Movie List -->" , movieList)
  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} history={history} movies={movieList} />
      <Switch>
        <Route path='/movies/:id'>
          <Movie />
        </Route>
        <Route exact path='/' render={(props) => <MovieList {...props} movies={movieList} />} />
      </Switch>
      
    </div>
  );
}
export default App