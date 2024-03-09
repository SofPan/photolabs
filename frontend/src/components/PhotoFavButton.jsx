import React, {useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {
    toggleFavouritePhoto,
    isSelected
  } = props;
  
  const [selected, setSelected] = useState(isSelected);

  const handleClick = () => {
    toggleFavouritePhoto(!selected);
    setSelected(!selected);
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