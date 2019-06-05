import React from 'react';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  display: grid;
  margin: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1rem;
  figure {
    position: relative;
    margin: 1rem;
    padding: 0.5rem;
    background-color: #ff6;
    border: 1px solid #aaa;
    border-radius: 0.5rem;
    text-align: center;
  }
  figcaption {
    padding-top: 1rem;
    font-size: 1.2rem;
  }
`;

const ResultsList = props => {
  const data = props.data;
  // console.log(data)
  return data.length ? (
    Object.keys(data).map(
      key =>
        (data[key].poster_path || data[key].profile_path) && (
          <figure key={data[key].id}>
            <img
              src={`http://image.tmdb.org/t/p/w154/${data[key].poster_path ||
                data[key].profile_path}`}
              alt={`${data[key].title || data[key].name}`}
            />
            <figcaption>{data[key].title || data[key].name}</figcaption>
          </figure>
        )
    )
  ) : (
    <p>Oops there's nothing here</p>
  );
};

export { ResultsContainer, ResultsList };
