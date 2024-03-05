import React, {useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({toggleFavouritePhoto, isSelected = false}) {
  const [selected, setSelected] = useState(isSelected);

  const handleClick = () => {
    const changeSelected = !selected;
    setSelected(changeSelected);
    toggleFavouritePhoto(changeSelected);
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