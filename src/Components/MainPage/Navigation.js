import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { previousPage, nextPage, firstPage } from '../../actions';
import { NavigationBar } from '../styles/NavigationStyles';

const Navigation = () => {
  const { searchResult, page } = useSelector(state => state);
  const dispatch = useDispatch();

  const changePage = toPage => () => {
    dispatch(toPage());
    window.scrollTo(0, 0);
  };

  return (
    <NavigationBar>
      <button
        {...page <= 1 && { disabled: true }}
        onClick={changePage(firstPage)}
      >
        First
      </button>
      <button
        {...page <= 1 && { disabled: true }}
        onClick={changePage(previousPage)}
      >
        Previous
      </button>
      <span>
        Page {page} of {searchResult.total_pages}
      </span>
      <button
        {...page >= searchResult.total_pages && { disabled: true }}
        onClick={changePage(nextPage)}
      >
        Next
      </button>
    </NavigationBar>
  );
};

export default Navigation;
