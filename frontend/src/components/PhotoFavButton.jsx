import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({getFavouritePhotoId, isSelected = false}) {
  const [selected, setSelected] = useState(isSelected);

  const handleClick = e => {
    const changeSelected = !selected;
    setSelected(changeSelected);
    getFavouritePhotoId(changeSelected);
  }
  
  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick} className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;