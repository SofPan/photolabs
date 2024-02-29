import {React, useState} from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos, favouriteChecker, toggleModal} = props;
  const [favouriteArray, setFavouriteArray] = useState([]);

  // add or remove favourite from array and leverage length
  const pushToFavourites = (favouritePhoto) => {
    const favouritePhotoArray = [...favouriteArray, favouritePhoto]
    setFavouriteArray(favouritePhotoArray);
    favouriteChecker(true);
  }

  const removeFromFavourites = (photoToRemove) => {
    const filteredPhotoArray = favouriteArray.filter(photo => photo.id != photoToRemove.id);
    setFavouriteArray(filteredPhotoArray);
    filteredPhotoArray.length === 0 && favouriteChecker(false);
  }
  return (
    <ul className="photo-list">
      {
        photos.map(photo => 
          <PhotoListItem key={photo.id} photo={photo} toggleModal={toggleModal} pushToFavourites={pushToFavourites} removeFromFavourites={removeFromFavourites}/>
        )
      }
    </ul>
  );
};

export default PhotoList;
