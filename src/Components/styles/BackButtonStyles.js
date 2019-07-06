import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledBackButton = styled(Link)`
  display: inline-flex;
  padding: 1rem 0;
  svg {
    fill: #02f;
  }
  span {
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;
  }
  :hover {
    svg {
      fill: #27f;
    }
  }
`;

export default StyledBackButton;
