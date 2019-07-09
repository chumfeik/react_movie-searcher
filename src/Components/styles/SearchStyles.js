import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 100%;
  background-color: #222;
  text-align: center;
`;

const SearchField = styled.input`
  width: calc(100% - 4rem);
  max-width: calc(800px - 2rem);
  margin: 1rem;
  padding: 0.5rem;
  border: 0.1rem solid #222;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  outline: none;
  :focus {
    border: 0.1rem solid #aaa;
  }
`;

export { SearchContainer, SearchField };
