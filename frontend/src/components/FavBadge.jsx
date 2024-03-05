import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ selected }) => {
  return (
    <div className='fav-badge'>
      <FavIcon 
        selected={selected} 
        displayAlert={!!selected}
      />
    </div>
  ) 
};

export default FavBadge;