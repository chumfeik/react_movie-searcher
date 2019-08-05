import React from 'react';
import { useSelector } from 'react-redux';
import { GenresContainer } from './styles/GenresStyles';

const Genres = ({ ids }) => {
  const genres = useSelector(state => state.genres);

  return (
    <GenresContainer>
      {genres && ids.map(id => <li key={id}>{genres[id]}</li>)}
    </GenresContainer>
  );
};

export default Genres;
