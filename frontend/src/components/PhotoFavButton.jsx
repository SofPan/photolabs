import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({countFavourites}) {
  const [selected, setSelected] = useState(false);

  // TODO: first figure out how to get selected to lift up the correct state
  const handleClick = e => {
    const changeSelected = !selected;
    setSelected(changeSelected)
      changeSelected ? countFavourites(true) : countFavourites(false);
  }
  
  ;
  


  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick} className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;