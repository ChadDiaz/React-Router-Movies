import React from 'react';
import { useHistory } from 'react-router-dom'


export default function SavedList(props) {
  console.log("savedMovie List Props" , props)
  const history = useHistory();
  const routeToHome = () => {
    history.push('/movie')
  }
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <button className="home-button" onclick={routeToHome}>Home</button>
    </div>
  );
}
