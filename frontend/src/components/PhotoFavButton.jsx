import React, {useEffect, useState } from 'react';

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

  // handle showing isSelected when being changed from different components (modal vs. home page)
  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick} className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;