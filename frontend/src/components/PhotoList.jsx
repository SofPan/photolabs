import {React, useState} from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {
    photos, 
    dispatchState,
    isLoaded
  } = props;

  return (
    <ul className="photo-list">
      {
        photos.map(photo => 
          <PhotoListItem 
            key={photo.id}
            photo={photo} 
            dispatchState={dispatchState}
            isLoaded={isLoaded}
          />
        )
      }
    </ul>
  );
};

export default PhotoList;
