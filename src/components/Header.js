import React from 'react';

const Header = ({ active }) => {
  return (
    <div className='header'>
      <h1>Image Selector</h1>
      {active && <h5>Choose a picture</h5>}
    </div>
  );
};

export default Header;
