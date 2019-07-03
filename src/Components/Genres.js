import React from 'react';
import { GenresContainer } from './styles/GenresStyles';
import genres from '../genres';

const Genres = ({ ids }) => (
  <GenresContainer>
    {ids.map(id => (
      <li key={id}>{genres[id]}</li>
    ))}
  </GenresContainer>
);

export default Genres;
