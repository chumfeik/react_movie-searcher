import React from 'react';
import Poster from './Poster';
import { Card, Description } from '../styles/ResultsListStyles';

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
    <Card>
      <Poster data={data} />
      <Description>
        <span>{data.media_type}</span>
        <KnownFor />
      </Description>
    </Card>
  );
};

export default Person;
