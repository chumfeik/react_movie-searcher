import styled from 'styled-components';

const ResultsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 1rem;
  .card {
    display: grid;
    grid-template-columns: 184px auto;
    grid-template-rows: 1fr 3rem;
    padding-top: 1rem;
    background-color: #ff6;
    border: 1px solid #aaa;
    border-radius: 0.5rem;
  }
  figure {
    text-align: center;
    figcaption {
      padding-top: 1rem;
      font-size: 1.2rem;
    }
  }
  .description {
    margin: 0 1rem;
    position: relative;
    div {
      border: 1px solid grey;
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
    figure {
      display: inline-block;
      margin: 1rem;
      figcaption {
        font-size: 0.5rem;
      }
    }
  }
  .date {
    margin: auto;
  }
  .additional_info {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
  .genres span {
    padding: 0.25rem;
  }
`;

export { ResultsContainer };
