import React from 'react';
import {CardShell,Title, Info} from './Styles';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <CardShell className="movie-card">
      <Title>{title}</Title>
      <Info>
      <div className="movie-director">
        Director: {director}
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      </Info>
    </CardShell>
  );
};

export default MovieCard;
