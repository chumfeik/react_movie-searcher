import React from 'react';
import { Context } from './State';
import { GenresContainer } from './styles/GenresStyles';

const Genres = ({ ids }) => {
  const state = React.useContext(Context);
  const { genres } = state;

  return (
    <GenresContainer>
      {genres && ids.map(id => <li key={id}>{genres[id]}</li>)}
    </GenresContainer>
  );
};

export default Genres;
