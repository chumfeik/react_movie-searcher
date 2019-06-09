import styled from 'styled-components';

const ResultsContainer = styled.div`
  display: grid;
  margin: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1rem;
  figure {
    position: relative;
    margin: 0 1rem;
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
  > span {
    grid-column: 1/-1;
    margin: 0 auto;
  }
`;


export { ResultsContainer };
