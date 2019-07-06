import styled from 'styled-components';

const ResultsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 0 auto;
  padding: 1rem;
  max-width: 800px;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 184px auto;
  grid-template-rows: 1fr auto;
  padding-top: 1rem;
  border: 0.2rem solid #aaa;
  border-radius: 0.5rem;
  a {
    text-align: center;
  }
  .date {
    margin: auto;
  }
`;

const Description = styled.div`
  margin: 0 1rem;
  padding-bottom: 1rem;
  div {
    border: 0.1rem solid #aaa;
    border-radius: 0.5rem;
    padding: 0.5rem;
    span {
      display: block;
      text-align: center;
    }
  }
  > span {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    text-transform: capitalize;
    text-align: right;
  }
`;

const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  span {
    margin: auto 0;
    white-space: nowrap;
  }
`;

export { ResultsContainer, Card, Description, AdditionalInfo };
