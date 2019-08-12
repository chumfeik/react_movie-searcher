import React from 'react';
import { ImagePlaceholder } from './styles/ResultsListStyles';

const Image = ({ path, ...props }) =>
  path ? (
    <img
      src={`http://image.tmdb.org/t/p/${props.small ? 'w92' : 'w154'}${path}`}
      alt={props.alt}
    />
  ) : (
    <ImagePlaceholder />
  );

export default Image;
