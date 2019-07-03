import React from 'react';
import Poster from './Poster';

const Person = props => {
  const data = props.data;

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

  return (
    <div className="card">
      <Poster data={data} />
      <div className="description">
        <span>{data.media_type}</span>
        <KnownFor />
      </div>
    </div>
  );
};

export default Person;
