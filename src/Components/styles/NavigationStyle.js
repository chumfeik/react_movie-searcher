import styled from 'styled-components';

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 2rem;
  margin-top: 1rem;
  > * {
    font-size: 1.25rem;
  }
  > button {
    padding: 0.5rem;
    background-color: #222;
    color: white;
    border: 0.1rem solid #222;
    border-radius: 0.5rem;
    cursor: pointer;
    :hover {
      box-shadow: 0 0 10px #777;
    }
    :disabled {
      background-color: #bbb;
      color: #ddd;
      border: #ccc;
      cursor: default;
      box-shadow: none;
    }
  }
  > span {
    margin: auto 1rem;
  }
`;

export { NavigationBar };
