import React from 'react';
import { Context } from '../State';
import { NavigationBar } from '../styles/NavigationStyle';

const Navigation = () => {
  const state = React.useContext(Context);
  const { results, page, setPage } = state;

  const changePage = change => {
    setPage(page + change);
    window.scrollTo(0, 0);
  };

  return (
    <NavigationBar>
      <button
        {...page <= 1 && { disabled: true }}
        onClick={() => changePage(-1)}
      >
        Previous
      </button>
      <span>
        Page {page} of {results.total_pages}
      </span>
      <button
        {...page >= results.total_pages && { disabled: true }}
        onClick={() => changePage(+1)}
      >
        Next
      </button>
    </NavigationBar>
  );
};

export default Navigation;
