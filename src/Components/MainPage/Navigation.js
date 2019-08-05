import React from 'react';
import { Context } from '../State';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavigationBar } from '../styles/NavigationStyles';

const Navigation = () => {
  const state = React.useContext(Context);
  const { results } = state;

  const page = useSelector(state => state.page);
  const dispatch = useDispatch();

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
      onClick={previousPage}>
        Previous
      </button>
      <span>
        Page {page} of {results.total_pages}
      </span>
      <button
        {...page >= results.total_pages && { disabled: true }}
        onClick={nextPage}
      >
        Next
      </button>
    </NavigationBar>
  );
};

export default Navigation;
