import {React, useState} from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos, openModal, addFavourite, removeFavourite} = props;

  return (
    <ul className="photo-list">
      {
        photos.map(photo => 
          <PhotoListItem 
            key={photo.id}
            photo={photo} 
            openModal={openModal}
            addFavourite={addFavourite}
            removeFavourite={removeFavourite}
          />
        )
      }
    </ul>
  );
};

export default PhotoList;
