import React from 'react';

const Navigation = ({ page, data, changePage }) => (
  // #TODO: remove inline style for nav
  <nav
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '0.5rem 2rem',
      // maxWidth: '40%'
    }}
  >
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
  </nav>
);

export default Navigation;
