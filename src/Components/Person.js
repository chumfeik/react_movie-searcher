import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from './State';
import Poster from './Poster';

const Person = props => {
  const data = props.data;
  const state = React.useContext(Context);

  const KnownFor = () => (
    <div>
      <span>Known for:</span>
      <ul>
        {Object.keys(data.known_for).map(key => (
          <Poster key={key} small data={data.known_for[key]} />
        ))}
      </ul>
    </div>
  );

  const handleClick = () =>
    state.setDetails({ id: data.id, media_type: data.media_type });

  return (
    <div className="card">
      <Link onClick={handleClick} to={`/details/`}>
        <Poster data={data} />
      </Link>
      <div className="description">
        <span>{data.media_type}</span>
        <KnownFor />
      </div>
    </div>
  );
};

export default Person;
