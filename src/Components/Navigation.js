import React from 'react';
import { NavigationBar } from './styles/NavigationStyle';

const Navigation = ({ page, data, changePage }) => (
  <NavigationBar>
    <button {...page <= 1 && { disabled: true }} onClick={() => changePage(-1)}>
      Previous
    </button>
    <span>
      Page {page} of {data.total_pages}
    </span>
    <button
      {...page >= data.total_pages && { disabled: true }}
      onClick={() => changePage(+1)}
    >
      Next
    </button>
  </NavigationBar>
);

export default Navigation;
