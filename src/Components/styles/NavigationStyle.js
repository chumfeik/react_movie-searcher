import styled from 'styled-components';

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 2rem;
  margin-top: 1rem;
  > * {
    font-size: 1.25rem;
  }
  /* max-width: 40%; */
  > button {
    background-color: #222;
    border: 0.1rem solid #222;
    border-radius: 0.5rem;
    padding: 0.5rem;
    color: white;
  }
  > span {
    text-align: center;
    vertical-align: middle;
    margin: auto;
  }
`;

export { NavigationBar };
