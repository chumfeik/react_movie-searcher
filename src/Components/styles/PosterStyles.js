import styled from 'styled-components';

const StyledPoster = styled.figure`
  text-align: center;
  display: inline-block;
  :hover {
    img {
      box-shadow: 0 0 0.75rem 0 #02f;
    }
  }
  ${({ isSmall }) =>
    isSmall ? `margin: 1rem; font-size: 0.5rem;` : `font-size: 1.2rem;`}
  figcaption {
    padding-top: 1rem;
  }
`;

export default StyledPoster;
