import styled from 'styled-components';

const StyledDetails = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 800px;
  p {
    margin: 1rem 0;
  }
`;

const Tagline = styled.p`
  font-style: italic;
`;

const StyledIMDBLink = styled.a`
  display: table;
  img {
    margin-bottom: -1rem;
    margin-right: 0.5rem;
  }
`;

const Episodes = styled.p`
  span {
    margin-right: 1rem;
  }
`;

const Details = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6rem;
  font-family: 'Roboto', sans-serif;
`;

export { StyledDetails, StyledIMDBLink, Tagline, Episodes, Details };
