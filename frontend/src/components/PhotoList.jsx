import {React, useState} from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos, favouriteChecker, toggleModal, pushToFavourites, removeFromFavourites} = props;

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
