import styled from 'styled-components';

const StyledDetails = styled.div`
  margin: 0 auto;
  padding: 2rem;
  max-width: 800px;
  p {
    margin: 1rem 0;
    :last-of-type {
      font-size: 1.2rem;
      font-weight: lighter;
      line-height: 1.8rem;
    }
  }
  .tagline {
    font-style: italic;
  }
  .imdb {
    display: table;
    img {
      margin-bottom: -1rem;
      margin-right: 0.5rem;
    }
  }
  .episodes_info span {
    margin-right: 1rem;
  }
`;

export default StyledDetails;
