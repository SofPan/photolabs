import {React, useState} from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {
    photos, 
    dispatchState,
    checkIfPhotoIsFavourite,
    isLoaded
  } = props;

  return (
    <ul className={`photo-list ${!isLoaded && "photo-list__loading"}`}>
      {
        photos.map(photo => 
          <PhotoListItem 
            key={photo.id}
            photo={photo} 
            dispatchState={dispatchState}
            checkIfPhotoIsFavourite={checkIfPhotoIsFavourite}
            isLoaded={isLoaded}
          />
        )
      }
    </ul>
  );
};

export default PhotoList;
