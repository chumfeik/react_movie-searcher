import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavigationBar } from '../styles/NavigationStyles';

const Navigation = () => {
  const { searchResult, page } = useSelector(state => state);
  const dispatch = useDispatch();

  const firstPage = () => {
    dispatch({ type: 'FIRST_PAGE' });
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    dispatch({ type: 'PREVIOUS_PAGE' });
    window.scrollTo(0, 0);
  };

  const nextPage = () => {
    dispatch({ type: 'NEXT_PAGE' });
    window.scrollTo(0, 0);
  };

  return (
    <NavigationBar>
      <button {...page <= 1 && { disabled: true }}
      onClick={firstPage}>
        First
      </button>
      <button {...page <= 1 && { disabled: true }}
      onClick={previousPage}>
        Previous
      </button>
      <span>
        Page {page} of {searchResult.total_pages}
      </span>
      <button
        {...page >= searchResult.total_pages && { disabled: true }}
        onClick={nextPage}
      >
        Next
      </button>
    </NavigationBar>
  );
};

export default Navigation;
